import React from "react";
import { BsFillMenuButtonWideFill, BsGridFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";
import { TbBoxMargin } from "react-icons/tb";

const icons = [
  { Icon: BsFillMenuButtonWideFill, size: 19.5, label: "Menu" },
  { Icon: BsGridFill, size: 20, label: "Grid" },
  { Icon: MdDesignServices, size: 22, label: "Design" },
  { Icon: TbBoxMargin, size: 23, label: "Spacing" },
  { Icon: IoSettingsSharp, size: 21, label: "Settings" },
];

const SidebarHeader: React.FC<SidebarHeaderPropsInterface> = ({
  selectedPanelIndex,
  handleIconButtonClick,
}) => {
  return (
    <section className="flex items-center w-full gap-3 h-[40px] border-b border-border-primary justify-around">
      {icons.map(({ Icon, size, label }, index) => (
        <Icon
          key={index}
          size={size}
          aria-label={label}
          className={`mt-[1px] cursor-pointer transition-all ease-in-out duration-200 hover:text-accent ${
            selectedPanelIndex == index ? "text-accent" : "text-text-secondary"
          }`}
          onClick={() => handleIconButtonClick(index)}
        />
      ))}
    </section>
  );
};

export default SidebarHeader;
