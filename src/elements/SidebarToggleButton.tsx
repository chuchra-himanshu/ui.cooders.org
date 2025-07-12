import React from "react";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";

const SidebarToggleButton: React.FC<SidebarToggleButtonPropsInterface> = ({
  setToggleSidebar,
  showToogleButton,
  toggleSidebar,
}) => {
  if (!showToogleButton) return null;

  const Icon = toggleSidebar
    ? TbArrowBigLeftLinesFilled
    : TbArrowBigRightLinesFilled;

  return (
    <section
      className="absolute top-1/2 -right-5 flex items-center justify-center bg-accent/15 rounded-full h-[38px] w-[38px] cursor-pointer hover:bg-accent/10 ease-in-out transition-all duration-200 opacity-30 hover:opacity-100"
      onClick={() => setToggleSidebar(!toggleSidebar)}
      aria-label="Toggle Sidebar"
    >
      <Icon className="text-accent h-[26px] w-[26px] -mt-[1px]" />
    </section>
  );
};

export default SidebarToggleButton;
