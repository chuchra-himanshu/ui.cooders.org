import React from "react";
import { DashboardSidebar } from "../components";

const Dashboard: React.FC = () => {
  return (
    <section className="flex relative w-screen">
      <DashboardSidebar />
    </section>
  );
};

export default Dashboard;
