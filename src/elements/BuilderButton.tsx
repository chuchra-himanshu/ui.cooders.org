import React from "react";
import { HiBuildingStorefront } from "react-icons/hi2";

const BuilderButton: React.FC = () => {
  return (
    <section className="absolute flex items-center justify-center gap-1 bottom-[10px] right-[10px] bg-white/5 py-2 px-3 rounded-[10px] text-white/40 hover:text-accent hover:bg-accent/5 cursor-pointer transition-all ease-in-out duration-200">
      <HiBuildingStorefront />
      <p className="font-medium">Builder</p>
    </section>
  );
};
export default BuilderButton;
