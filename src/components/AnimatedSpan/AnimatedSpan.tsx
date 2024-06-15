import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
type Props = {
  id: number;
  text: string;
  x: number;
  y: number;
};
export const AnimatedSpan = ({ id, text, x, y }: Props) => {
  const spanControls = useAnimation();

  useEffect(() => {
    const animateSpan = async () => {
      await spanControls.start({
        opacity: 0,
        y: -80,
        transition: { duration: 0.8 },
      });
    };

    animateSpan();
  }, []);

  return (
    <motion.span
      key={id}
      initial={{ opacity: 1, y: 0 }}
      animate={spanControls}
      style={{ left: x, top: y }}
      className="absolute  text-3xl text-secondary-100 font-bold">
      {text}
    </motion.span>
  );
};
