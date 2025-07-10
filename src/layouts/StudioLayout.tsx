import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Sidebar } from "../components";

const StudioLayout: React.FC = () => {
  return (
    <section className="h-screen bg-background-primary flex flex-col justify-between">
      <Header />
      <section className="h-full flex">
        <Sidebar />
        <Outlet />
      </section>
      <Footer />
    </section>
  );
};

export default StudioLayout;
