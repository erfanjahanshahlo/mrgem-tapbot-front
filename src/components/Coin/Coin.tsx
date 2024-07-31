import { useEffect, useRef, useState } from "react";
// import Mrgemcharacter from "/Mrgemcharacter.png";
import { distance, round } from "@/utils";
import { motion, useAnimation } from "framer-motion";
import { AnimatedSpan } from "../AnimatedSpan/AnimatedSpan";
import { useMainContext } from "@/providers/MainContext";
import { POWER_STORAGE_KEY, PowerData } from "../MineDetail/MineDetail";
import { useSyncCoins } from "@/hooks/useSyncCoins";
type Props = {};

const Coin = ({}: Props) => {
  const [rotations, setRotations] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setAnimating] = useState(false);
  const isAnimatingReference = useRef(isAnimating);
  const [spans, setSpans] = useState<
    { id: number; text: string; x: number; y: number }[]
  >([]);
  const { data, setCoins, minePower, setMinePower, userCoins } =
    useMainContext();
  const currentLevel =
    data?.data.levels.find(
      (level: any) => level.id === data.user.current_level
    ) || null;
  const { syncCoins } = useSyncCoins();
  const indexOfCurrentLevel = data?.data.levels.findIndex(
    (level: any) => level.id === data?.user.current_level
  );
  const [isTimeout, setIsTimeout] = useState(false);
  const controls = useAnimation();
  const animate = async (event: any) => {
    if (minePower && minePower - currentLevel?.earn_per_click <= 0) return;
    if (minePower !== null) {
      const newPower = minePower - currentLevel?.earn_per_click;
      setMinePower(newPower);

      const storedPower = localStorage.getItem(POWER_STORAGE_KEY);
      if (storedPower) {
        const parsedPower: PowerData = JSON.parse(storedPower);
        const updatedPowerData: PowerData = {
          value: newPower,
          timestamp: parsedPower.timestamp, // Keep the original timestamp
        };

        localStorage.setItem(
          POWER_STORAGE_KEY,
          JSON.stringify(updatedPowerData)
        );
      }
    }
    // data?.user.coins
    setCoins((prev) => {
      const newCoins = prev + currentLevel?.earn_per_click;
      localStorage.setItem("coins", (newCoins - userCoins).toString());
      return prev + currentLevel?.earn_per_click;
    });
    setAnimating(true);
    const rect = event.currentTarget.getBoundingClientRect();

    const absolute = {
      x: event.changedTouches[0].clientX - rect.left,
      y: event.changedTouches[0].clientY - rect.top,
    };

    const percent = {
      x: round((100 / rect.width) * absolute.x),
      y: round((100 / rect.height) * absolute.y),
    };

    const center = {
      x: percent.x - 50,
      y: percent.y - 50,
    };

    setRotations({
      x: round(((center.x > 50 ? 1 : -1) * center.x) / 12),
      y: round(center.y / 16),
      z: round(distance(percent.x, percent.y, 50, 50) / 20),
    });

    setSpans((prevSpans) => [
      ...prevSpans,
      {
        id: Math.random(),
        text: `+${currentLevel?.earn_per_click}`,
        x: event.changedTouches[0].clientX - rect.left,
        y: event.changedTouches[0].clientY - rect.top,
      },
    ]);
    await controls.start("visible");
    await syncCoins();
  };

  const stopAnimating = () => {
    setAnimating(false);

    setTimeout(async () => {
      if (isAnimatingReference.current) return;

      setRotations({ x: 0, y: 0, z: 2 });
    }, 100);
  };
  useEffect(() => {
    if (spans.length === 0) return;
    if (isTimeout) return;
    setIsTimeout(true);
    setTimeout(() => {
      setSpans([]);
      setIsTimeout(false);
    }, 10000);
  }, [spans]);

  return (
    <motion.div
      onTouchStart={animate}
      // onClick={animate}
      onTouchEnd={stopAnimating}
      animate={{
        rotateY: rotations.x,
        rotateX: rotations.y,
        transformPerspective: rotations.z * 100,
      }}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center",
        perspective: "320px",
      }}
      className="w-5/6 min-w-[66%] h-auto aspect-square mx-auto my-5 relative max-w-sm shadow-[inset_2px_2px_17px_0_var(--tw-shadow-color)]  shadow-black-100 rounded-full   ">
      <div className="w-full h-full aspect-square z-50 sticky bg-gradient-to-tl from-primary to-card rounded-full p-4">
        {spans.map((span, id) => (
          <AnimatedSpan {...span} key={`animated span num--${id}`} />
        ))}
        <img
          src={data?.data.levels[indexOfCurrentLevel].character}
          alt=""
          className="size-full object-cover object-center aspect-square "
        />
      </div>
      <div className="w-[calc(100%+25px)] aspect-square rounded-full z-10 absolute bg-gradient-to-b from-[#334766] to-[#05070a] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
    </motion.div>
  );
};

export { Coin };
