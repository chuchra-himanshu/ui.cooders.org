import { AiFillApi } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { MdDesignServices, MdPeopleAlt } from "react-icons/md";
import { TbLayoutGridFilled } from "react-icons/tb";
import { IoTerminalSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const SIDEBAR_ITEMS = [
  {
    title: "Admin Panel",
    slug: "/admin",
    icon: TbLayoutGridFilled,
  },
  {
    title: "Authentication",
    slug: "/admin/auth",
    icon: RiLockPasswordFill,
  },
  {
    title: "Studio",
    slug: "/admin/studio",
    icon: MdDesignServices,
  },
  {
    title: "Community",
    slug: "/admin/community",
    icon: MdPeopleAlt,
  },
  {
    title: "SolveX",
    slug: "/admin/solvex",
    icon: IoTerminalSharp,
  },
  {
    title: "Notebook",
    slug: "/admin/notebook",
    icon: FaBookReader,
  },
  {
    title: "MockAPI",
    slug: "/admin/mockapi",
    icon: AiFillApi,
  },
];

export default {
  SIDEBAR_ITEMS,
};
