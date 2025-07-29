import React, { useState, useCallback, useMemo } from "react";
import SidebarHeader from "./SidebarHeader";
import LibraryListPanel from "./LibraryListPanel";
import ComponentListPanel from "./ComponentListPanel";
import ComponentPropsEditor from "./ComponentPropsEditor";
import StyleEditorPanel from "./StyleEditorPanel";
import StudioSettingsPanel from "./StudioSettingsPanel";
import Sidebar from "../global/Sidebar";
import { STUDIO_DATA } from "../../data";

const StudioSidebar: React.FC = () => {
  const { LIBRARIES, MUI_COMPONENTS } = STUDIO_DATA;
  const [selectedPanelIndex, setSelectedPanelIndex] = useState(0);
  const [selectedLibrary, setSelectedLibrary] = useState<string>(
    LIBRARIES[0]?.title
  );
  const [selectedComponent, setSelectedComponent] = useState<string>(
    MUI_COMPONENTS[0].title
  );

  const handleIconButtonClick = useCallback((index: number) => {
    setSelectedPanelIndex(index);
  }, []);

  const handleSelectLibrary = (title: string) => {
    setSelectedLibrary(title);
  };

  const handleSelectComponent = (title: string) => {
    setSelectedComponent(title);
  };

  const panelComponents = useMemo(
    () => [
      <LibraryListPanel
        key="libraries"
        selectedLibrary={selectedLibrary}
        handleSelectLibrary={handleSelectLibrary}
      />,
      <ComponentListPanel
        key="compoennts"
        selectedComponent={selectedComponent}
        handleSelectComponent={handleSelectComponent}
      />,
      <ComponentPropsEditor key="component_props" />,
      <StyleEditorPanel key="styles" />,
      <StudioSettingsPanel key="settings" />,
    ],
    [selectedLibrary, selectedComponent]
  );

  return (
    <Sidebar>
      <SidebarHeader handleIconButtonClick={handleIconButtonClick} />
      {panelComponents[selectedPanelIndex]}
    </Sidebar>
  );
};

export default StudioSidebar;
