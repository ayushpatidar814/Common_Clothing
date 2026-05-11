import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const handleMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setHidden(false);
    };

    const hide = () => setHidden(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  if (window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[90] h-4 w-4 rounded-full bg-white mix-blend-difference"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 50, mass: 0.15 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[89] h-14 w-14 rounded-full border border-cyan-300/30 bg-cyan-300/5 backdrop-blur-sm"
        animate={{
          x: position.x - 28,
          y: position.y - 28,
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 25 }}
      />
    </>
  );
}
