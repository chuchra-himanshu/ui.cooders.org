import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const StudioLayout: React.FC = () => {
  return (
    <section className="h-screen bg-background-primary flex flex-col justify-between">
      <Header />
      <Outlet />
    </section>
  );
};

export default StudioLayout;
