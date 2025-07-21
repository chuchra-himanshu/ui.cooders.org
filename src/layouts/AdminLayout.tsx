import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components";

const AdminLayout: React.FC = () => {
  return (
    <section className="flex relative w-screen">
      <AdminSidebar />
      <Outlet />
    </section>
  );
};

export default AdminLayout;
