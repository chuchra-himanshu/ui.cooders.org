import React, { useState } from "react";
import { motion } from "framer-motion";

const blocks = [
  { points: "0,10 10,0 20,10 10,20", opacity: 1 },
  { points: "22,10 32,0 42,10 32,20", opacity: 0.7 },
  { points: "44,10 54,0 64,10 54,20", opacity: 0.4 },
  { points: "11,22 21,12 31,22 21,32", opacity: 0.6 },
  { points: "33,22 43,12 53,22 43,32", opacity: 0.8 },
  { points: "22,34 32,24 42,34 32,44", opacity: 1 },
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
      className="w-[60px] h-[70px] fill-accent cursor-pointer rotate-180 -mt-[14px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 66 48"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={
        hovered
          ? {
              scale: [1, 1.05, 1],
              transition: {
                duration: 0.6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }
          : { scale: 1 }
      }
    >
      <>
        {blocks.map((block, index) => (
          <motion.polygon
            key={index}
            points={block.points}
            opacity={block.opacity}
            initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
            animate={
              scattered
                ? {
                    x: (Math.random() - 0.5) * 20,
                    y: (Math.random() - 0.5) * 20,
                    rotate: (Math.random() - 0.5) * 25,
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }
                : {
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: { duration: 0.3 },
                  }
            }
          />
        ))}
        <text
          x="11.5"
          y="59"
          fill="#4184f3"
          fontSize="12"
          fontWeight={650}
          fontFamily="sans-serif"
          transform="rotate(180, 33, 24)"
        >
          STUDIO
        </text>
      </>
    </motion.svg>
  );
};

export default Logo;
