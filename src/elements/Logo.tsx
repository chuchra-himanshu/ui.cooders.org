import React, { useState } from "react";
import { motion } from "framer-motion";

const polygons = [
  { points: "45,11 36,11 35.5,1", opacity: 0.7 },
  { points: "35.5,1 25.4,14.1 39,21", opacity: 1 },
  { points: "17,9.8 39,21 17,26", opacity: 0.4 },
  { points: "2,12 17,26 17,9.8", opacity: 0.7 },
  { points: "17,26 39,21 28,36", opacity: 0.7 },
  { points: "28,36 4.5,44 17,26", opacity: 1 },
  { points: "17,26 1,26 10.8,20.1", opacity: 1 },
];

const Logo: React.FC = () => {
  const [scattered, setScattered] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setScattered(true);
    setTimeout(() => setScattered(false), 300);
  };

  return (
    <motion.svg
      className="w-[48px] h-[48px] fill-accent cursor-pointer z-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 46 46"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={
        hovered
          ? {
              scale: [1, 1.1, 1],
              transition: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
          : { scale: 1 }
      }
    >
      {polygons.map((polygon, index) => (
        <motion.polygon
          key={index}
          points={polygon.points}
          opacity={polygon.opacity}
          initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          animate={
            scattered
              ? {
                  x: (Math.random() - 0.5) * 25,
                  y: (Math.random() - 0.5) * 25,
                  rotate: (Math.random() - 0.5) * 20,
                  scale: 1.1,
                  transition: { duration: 0.15, ease: "easeOut" },
                }
              : {
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: { duration: 0.2, ease: "easeOut" },
                }
          }
        />
      ))}
    </motion.svg>
  );
};

export default Logo;
