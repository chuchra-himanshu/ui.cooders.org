import React from "react";

const SidebarPanelWrapper: React.FC<SidebarPanelWrapperPropsInterface> = ({
  children,
}) => {
  return (
    <section className="px-[8px] pt-[9px] overflow-y-scroll h-[calc(100vh-135px)] hide-scrollbar">
      {children}
    </section>
  );
};

export default SidebarPanelWrapper;
