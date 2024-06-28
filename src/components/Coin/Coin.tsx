import { useEffect, useRef, useState } from "react";
import Mrgemcharacter from "/LevelCharacters/mrgem-bronze-character-transparent.webp";
import { distance, round } from "@/utils";
import { motion, useAnimation } from "framer-motion";
import { AnimatedSpan } from "../AnimatedSpan/AnimatedSpan";
type Props = {};

const Coin = ({}: Props) => {
  const [rotations, setRotations] = useState({ x: 0, y: 0, z: 0 });
  const [isAnimating, setAnimating] = useState(false);
  const isAnimatingReference = useRef(isAnimating);
  const [spans, setSpans] = useState<
    { id: number; text: string; x: number; y: number }[]
  >([]);
  const [isTimeout, setIsTimeout] = useState(false);
  const controls = useAnimation();
  const animate = async (event: any) => {
    console.log(event);

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
    console.log(event);

    setSpans((prevSpans) => [
      ...prevSpans,
      {
        id: Math.random(),
        text: "+2",
        x: event.changedTouches[0].clientX - rect.left,
        y: event.changedTouches[0].clientY - rect.top,
      },
    ]);
    await controls.start("visible");
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
    }, 5000);
  }, [spans]);
  return (
    <motion.div
      onTouchStart={animate}
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
      <div className="w-full h-full aspect-square z-50 sticky bg-gradient-to-br from-primary to-card rounded-full p-10">
        {spans.map((span, id) => (
          <AnimatedSpan {...span} key={`animated span num--${id}`} />
        ))}
        <img
          src={Mrgemcharacter}
          alt=""
          className="size-full object-cover object-center aspect-square "
        />
      </div>
      <div className="w-[calc(100%+25px)] aspect-square rounded-full z-10 absolute bg-gradient-to-t from-[#05070a] to-[#334766] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
    </motion.div>
  );
};

export { Coin };
