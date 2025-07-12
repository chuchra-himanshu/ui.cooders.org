import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const blocks = [
  { points: "0,10 10,0 20,10 10,20", opacity: 1 },
  { points: "22,10 32,0 42,10 32,20", opacity: 0.7 },
  { points: "44,10 54,0 64,10 54,20", opacity: 0.4 },
  { points: "11,22 21,12 31,22 21,32", opacity: 0.6 },
  { points: "33,22 43,12 53,22 43,32", opacity: 0.8 },
  { points: "22,34 32,24 42,34 32,44", opacity: 1 },
];

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const LogoLoader: React.FC = () => {
  const controlsArray = blocks.map(() => useAnimationControls());

  useEffect(() => {
    const animateLoop = async () => {
      while (true) {
        // Scatter quickly
        await Promise.all(
          controlsArray.map((controls) =>
            controls.start({
              x: rand(-15, 15),
              y: rand(-15, 15),
              rotate: rand(-20, 20),
              scale: 1.1,
              transition: { duration: 0.15 },
            })
          )
        );

        // Rejoin faster
        await Promise.all(
          controlsArray.map((controls) =>
            controls.start({
              x: 0,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: { duration: 0.2 },
            })
          )
        );

        // Minimal delay
        await new Promise((res) => setTimeout(res, 100));
      }
    };

    animateLoop();
  }, [controlsArray]);

  return (
    <motion.svg
      className="w-[75px] h-[75px] fill-accent rotate-180 -mt-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66 48"
    >
      {blocks.map((block, index) => (
        <motion.polygon
          key={index}
          points={block.points}
          opacity={block.opacity}
          animate={controlsArray[index]}
          initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
        />
      ))}
    </motion.svg>
  );
};

export default LogoLoader;
