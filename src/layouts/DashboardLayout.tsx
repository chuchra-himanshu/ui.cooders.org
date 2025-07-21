import React from "react";
import { DashboardSidebar } from "../components";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = () => {
  return (
    <section className="flex relative w-screen">
      <DashboardSidebar />
      <Outlet />
    </section>
  );
};

export default DashboardLayout;
