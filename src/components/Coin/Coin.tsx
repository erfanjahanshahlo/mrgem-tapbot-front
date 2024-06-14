import { useEffect, useRef, useState } from "react";
import Mrgemcharacter from "/Mrgemcharacter.png";
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
  const controls = useAnimation();
  const animate = async (event: any) => {
    setAnimating(true);

    const rect = event.currentTarget.getBoundingClientRect();

    const absolute = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
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
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
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
    setTimeout(() => setSpans([]), 5000);
  }, [spans]);
  return (
    <motion.div
      onMouseDown={animate}
      onMouseUp={stopAnimating}
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
      className="w-full aspect-square relative bg-gradient-to-br max-w-sm shadow-[inset_2px_2px_17px_0_var(--tw-shadow-color)] shadow-black-100 from-secondary-10 outline-[16px] outline  outline-primary-90 to-primary-50    rounded-full  p-8">
      {spans.map((span, id) => (
        <AnimatedSpan {...span} key={`animated span num--${id}`} />
      ))}
      <img
        src={Mrgemcharacter}
        alt=""
        className="size-full object-cover object-center "
      />
    </motion.div>
  );
};

export { Coin };
