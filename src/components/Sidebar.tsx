import React from "react";
import {
  useLocation,
  useNavigate,
  type Location,
  type NavigateFunction,
} from "react-router-dom";
import { SIDEBAR } from "../data";
import { SidebarItem } from "../elements";

const Sidebar: React.FC = () => {
  const location: Location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const handleItemClick = (path: string) => navigate(path);

  return (
    <section className="h-full hidden md:block w-[220px] border-r border-border-primary transition-[width] duration-300 ease-in-out">
      {SIDEBAR.SIDEBAR_FIELDS.map((item) => (
        <SidebarItem
          key={item.slug}
          isSelected={item.slug === location.pathname}
          title={item.title}
          Icon={item.icon}
          handleItemClick={() => handleItemClick(item.slug)}
        />
      ))}
    </section>
  );
};

export default Sidebar;
