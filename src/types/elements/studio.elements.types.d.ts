interface SidebarToggleButtonPropsInterface {
  showToogleButton: boolean;
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ComponentItemPropsInterface {
  Icon: IconType;
  title: string;
  iconClasses?: string;
  iconSize?: number;
  titleClasses?: string;
}
