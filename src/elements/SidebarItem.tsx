import React from "react";

const SidebarItem: React.FC<SidebarItemProps> = ({
  isSelected = false,
  title,
  Icon,
  handleItemClick,
}) => {
  const baseClasses =
    "flex items-center h-[50px] transition-colors cursor-pointer px-[13.5px]";
  const textClasses =
    "text-[18px] font-medium ml-3 :max-w-[200px] overflow-hidden opacity-100 transition-[max-width,opacity] duration-300 ease-in-out whitespace-nowrap";
  const iconClasses = `h-[22px] w-[22px] shrink-0 ${
    isSelected ? "text-accent" : ""
  }`;

  return (
    <div
      className={`${baseClasses} ${
        isSelected
          ? "bg-accent/10 hover:bg-accent/5 text-accent"
          : "hover:bg-accent/5 text-text-primary hover:text-accent"
      }`}
      onClick={handleItemClick}
    >
      <Icon className={iconClasses} />
      <p className={`${textClasses} ${isSelected ? "text-accent" : ""}`}>
        {title}
      </p>
    </div>
  );
};

export default SidebarItem;
