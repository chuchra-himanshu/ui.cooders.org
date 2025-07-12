import React from "react";
import { LuTextCursorInput } from "react-icons/lu";
import SidebarPanelWrapper from "./SidebarPanelWrapper";

const ComponentListPanel: React.FC = () => {
  return (
    <SidebarPanelWrapper>
      <div className="flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-white/40 bg-white/5 hover:bg-accent/5 hover:text-accent mb-[7px]">
        <LuTextCursorInput className="w-[24%]" size={22} />
        <p className="text-[16px] font-medium -mt-[0.8px]">Autocomplete</p>
      </div>
      <div className="flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-white/40 bg-white/5 hover:bg-accent/5 hover:text-accent mb-[7px]">
        <LuTextCursorInput className="w-[24%]" size={22} />
        <p className="text-[16px] font-medium -mt-[0.8px]">Autocomplete</p>
      </div>
    </SidebarPanelWrapper>
  );
};

export default ComponentListPanel;
