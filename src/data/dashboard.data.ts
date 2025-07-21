import { FaCalendarAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiKanbanFill } from "react-icons/pi";

const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    slug: "/",
    icon: MdDashboard,
  },
  {
    title: "Kanban",
    slug: "/kanban",
    icon: PiKanbanFill,
  },
  {
    title: "Calender",
    slug: "/calender",
    icon: FaCalendarAlt,
  },
];

export default {
  SIDEBAR_ITEMS,
};
