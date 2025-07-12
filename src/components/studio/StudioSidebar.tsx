import React, { useState, useCallback, useMemo } from "react";
import { SidebarToggleButton } from "../../elements";
import SidebarHeader from "./SidebarHeader";
import LibraryListPanel from "./LibraryListPanel";
import ComponentListPanel from "./ComponentListPanel";
import ComponentPropsEditor from "./ComponentPropsEditor";
import StyleEditorPanel from "./StyleEditorPanel";
import StudioSettingsPanel from "./StudioSettingsPanel";

const StudioSidebar: React.FC = () => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(false);
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);

  const handleMouseOver = useCallback(() => setShowToggleButton(true), []);
  const handleMouseOut = useCallback(() => setShowToggleButton(false), []);
  const handleIconButtonClick = useCallback((index: number) => {
    setSelectedPanelIndex(index);
  }, []);

  const panelComponents = useMemo(
    () => [
      <LibraryListPanel key="libraries" />,
      <ComponentListPanel key="compoennts" />,
      <ComponentPropsEditor key="component_props" />,
      <StyleEditorPanel key="styles" />,
      <StudioSettingsPanel key="settings" />,
    ],
    []
  );

  return (
    <section
      className={`relative border-r border-border-primary transition-all duration-200 ease-in-out ${
        toggleSidebar ? "w-[220px]" : "w-0"
      }`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {toggleSidebar && (
        <>
          <SidebarHeader handleIconButtonClick={handleIconButtonClick} />
          {panelComponents[selectedPanelIndex]}
        </>
      )}

      <SidebarToggleButton
        setToggleSidebar={setToggleSidebar}
        showToogleButton={showToggleButton}
        toggleSidebar={toggleSidebar}
      />
    </section>
  );
};

export default StudioSidebar;
