import React, { useState, useCallback, useMemo } from "react";
import SidebarHeader from "./SidebarHeader";
import LibraryListPanel from "./LibraryListPanel";
import ComponentListPanel from "./ComponentListPanel";
import ComponentPropsEditor from "./ComponentPropsEditor";
import StyleEditorPanel from "./StyleEditorPanel";
import StudioSettingsPanel from "./StudioSettingsPanel";
import Sidebar from "../global/Sidebar";

const StudioSidebar: React.FC = () => {
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);

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
    <Sidebar>
      <SidebarHeader handleIconButtonClick={handleIconButtonClick} />
      {panelComponents[selectedPanelIndex]}
    </Sidebar>
  );
};

export default StudioSidebar;
