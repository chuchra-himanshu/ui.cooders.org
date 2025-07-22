import React from "react";
import Sidebar from "../global/Sidebar";
import SidebarRowItem from "../global/SidebarRowItem";
import { DASHBOARD_DATA } from "../../data";
import { useLocation, type Location } from "react-router-dom";

const DashboardSidebar: React.FC = () => {
  const location: Location = useLocation();

  return (
    <Sidebar>
      {DASHBOARD_DATA.SIDEBAR_ITEMS?.map((item) => (
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

export default DashboardSidebar;
