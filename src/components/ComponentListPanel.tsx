import React from "react";
import { LuTextCursorInput } from "react-icons/lu";

const ComponentListPanel: React.FC = () => {
  return (
    <section className="px-[8px] pt-[9px] overflow-y-scroll h-[calc(100vh-135px)] hide-scrollbar">
      <div className="flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-white/40 bg-white/5 hover:bg-accent/5 hover:text-accent mb-[7px]">
        <LuTextCursorInput className="w-[24%]" size={22} />
        <p className="text-[16px] font-medium -mt-[0.8px]">Autocomplete</p>
      </div>
      <div className="flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-white/40 bg-white/5 hover:bg-accent/5 hover:text-accent mb-[7px]">
        <LuTextCursorInput className="w-[24%]" size={22} />
        <p className="text-[16px] font-medium -mt-[0.8px]">Autocomplete</p>
      </div>
    </section>
  );
};

export default ComponentListPanel;
