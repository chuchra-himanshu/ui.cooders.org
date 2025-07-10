interface IconButtonPropsInterface {
  Icon: IconType;
  iconClassNames?: string;
}

interface AvatarPropsInterface {
  userAvatarURL?: string;
}

interface SidebarItemProps {
  isSelected?: boolean;
  title: string;
  Icon: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  handleItemClick?: () => void;
}
