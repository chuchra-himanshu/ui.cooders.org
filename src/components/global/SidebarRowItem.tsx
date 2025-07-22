import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarRowItem: React.FC<SidebarRowItemPropsInterface> = ({
  title,
  Icon,
  iconSize = 24,
  isSelected = false,
  slug,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center w-full h-[48px] mb-1 ${
        isSelected ? "bg-accent/10" : ""
      } hover:bg-accent/5 transition-all ease-in-out duration-200 cursor-pointer text-text-primary hover:text-accent`}
      onClick={() => navigate(slug)}
    >
      <Icon size={iconSize} className="w-[26%] " />
      <p className="text-[17px] font-medium mt-[1px]">{title}</p>
    </div>
  );
};

export default SidebarRowItem;
