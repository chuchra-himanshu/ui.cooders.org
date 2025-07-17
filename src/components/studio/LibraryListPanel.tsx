import React from "react";
import SidebarPanelWrapper from "./SidebarPanelWrapper";
import {
  SiAntdesign,
  SiChakraui,
  SiHeadlessui,
  SiMui,
  SiNextui,
  SiPrimereact,
  SiRadixui,
  SiShadcnui,
} from "react-icons/si";

const LibraryListPanel: React.FC = () => {
  return (
    <SidebarPanelWrapper>
      <div className="flex items-center justify-between flex-wrap">
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiMui size={26} />
          <p className="text-[13px] font-medium">Material UI</p>
        </div>
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiShadcnui size={26} />
          <p className="text-[13px] font-medium">ShadCN</p>
        </div>
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiPrimereact size={26} />
          <p className="text-[13px] font-medium">PrimeReact</p>
        </div>
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiHeadlessui size={26} />
          <p className="text-[13px] font-medium">Headless UI</p>
        </div>
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiChakraui size={26} />
          <p className="text-[13px] font-medium">Chakra UI</p>
        </div>
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiAntdesign size={26} />
          <p className="text-[13px] font-medium">Ant Design</p>
        </div>
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiRadixui size={26} />
          <p className="text-[13px] font-medium">Radix UI</p>
        </div>
        <div className="w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 text-text-secondary bg-overlay-primary hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px]">
          <SiNextui size={26} />
          <p className="text-[13px] font-medium">Hero UI</p>
        </div>
      </div>
    </SidebarPanelWrapper>
  );
};

export default LibraryListPanel;
