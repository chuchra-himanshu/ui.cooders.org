interface SidebarPropsInterface {
  children: ReactNode;
}

interface SidebarRowItemPropsInterface {
  title: string;
  Icon: IconType;
  iconSize?: number;
  isSelected?: boolean;
  slug: string;
}

interface DialogPropsInterface {
  children: ReactNode;
  heading: string;
  handleDialogClose: () => void;
}
