import React from "react";
import SidebarPanelWrapper from "./SidebarPanelWrapper";
import * as Icons from "react-icons/md";
import { STUDIO_DATA } from "../../data";

interface ComponentListPanelPropsInterface {
  selectedComponent: string;
  handleSelectComponent: (title: string) => void;
}

const getIcon = (iconName: string) => {
  return (Icons as any)[iconName] || Icons.MdReadMore;
};
const ComponentListPanel: React.FC<ComponentListPanelPropsInterface> = ({
  handleSelectComponent,
  selectedComponent,
}) => {
  return (
    <SidebarPanelWrapper>
      {STUDIO_DATA.MUI_COMPONENTS.filter((comp) => comp.visibility).map(
        (comp, index) => {
          const IconComponent = getIcon(comp.icon);
          return (
            <div
              key={index}
              className={`flex items-center justify-start py-[5px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-accent/5 hover:text-accent mb-[7px] ${
                selectedComponent == comp.title
                  ? "bg-accent/5 text-accent"
                  : "text-text-secondary bg-overlay-primary"
              }`}
              onClick={() => handleSelectComponent(comp.title)}
            >
              <IconComponent className="w-[24%]" size={22} />
              <p className="text-[16px] font-medium -mt-[0.8px]">
                {comp.title}
              </p>
            </div>
          );
        }
      )}
    </SidebarPanelWrapper>
  );
};

export default ComponentListPanel;
