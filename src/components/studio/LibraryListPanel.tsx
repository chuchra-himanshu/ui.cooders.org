import React from "react";
import SidebarPanelWrapper from "./SidebarPanelWrapper";
import * as Icons from "react-icons/si";
import { STUDIO_DATA } from "../../data";

const getIcon = (iconName: string) => {
  return (Icons as any)[iconName] || Icons.SiReact;
};

interface LibraryListPanelPropsInterface {
  selectedLibrary: string;
  handleSelectLibrary: (title: string) => void;
}

const LibraryListPanel: React.FC<LibraryListPanelPropsInterface> = ({
  handleSelectLibrary,
  selectedLibrary,
}) => {
  return (
    <SidebarPanelWrapper>
      <div className="flex items-center justify-between flex-wrap">
        {STUDIO_DATA.LIBRARIES.filter((lib) => lib.visibility).map(
          (lib, index) => {
            const IconComponent = getIcon(lib.logo);
            return (
              <div
                key={index}
                className={`w-[98px] mb-[8px] h-[80px] rounded-[10px] cursor-pointer transition-all ease-in-out duration-200 hover:bg-accent/5 hover:text-accent flex flex-col items-center justify-center gap-[6px] ${
                  selectedLibrary == lib.title
                    ? "bg-accent/5 text-accent"
                    : "text-text-secondary bg-overlay-primary"
                }`}
                onClick={() => handleSelectLibrary(lib.title)}
              >
                <IconComponent size={26} />
                <p className="text-[13px] font-medium">{lib.title}</p>
              </div>
            );
          }
        )}
      </div>
    </SidebarPanelWrapper>
  );
};

export default LibraryListPanel;
