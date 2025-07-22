import React from "react";
import { useLocation, type Location } from "react-router-dom";
import Sidebar from "../global/Sidebar";
import SidebarRowItem from "../global/SidebarRowItem";
import { ADMIN_DATA } from "../../data";

const AdminSidebar: React.FC = () => {
  const location: Location = useLocation();

  return (
    <Sidebar>
      {ADMIN_DATA.SIDEBAR_ITEMS?.map((item) => (
        <SidebarRowItem
          key={item.slug}
          title={item.title}
          Icon={item.icon}
          isSelected={location.pathname == item.slug}
          slug={item.slug}
        />
      ))}
    </Sidebar>
  );
};

export default AdminSidebar;
