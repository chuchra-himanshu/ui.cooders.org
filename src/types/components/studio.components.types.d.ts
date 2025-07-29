interface SidebarHeaderPropsInterface {
  selectedPanelIndex: number;
  handleIconButtonClick: (panel_index: number) => void;
}

interface SidebarPanelWrapperPropsInterface {
  children: ReactNode;
}
