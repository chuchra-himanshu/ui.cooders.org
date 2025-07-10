import { IoSettingsSharp, IoGrid, IoConstruct } from "react-icons/io5";
import { SiMui, SiShadcnui, SiPrimereact } from "react-icons/si";

const SIDEBAR_FIELDS = [
  {
    title: "Dashboard",
    icon: IoGrid,
    slug: "/",
  },
  {
    title: "Material UI",
    icon: SiMui,
    slug: "/mui",
  },
  {
    title: "ShadCN",
    icon: SiShadcnui,
    slug: "/shadcn",
  },
  {
    title: "PrimeReact",
    icon: SiPrimereact,
    slug: "/prime-react",
  },
  {
    title: "Builder",
    icon: IoConstruct,
    slug: "/builder",
  },
  {
    title: "Settings",
    icon: IoSettingsSharp,
    slug: "/settings",
  },
];

export const SIDEBAR = {
  SIDEBAR_FIELDS,
};
