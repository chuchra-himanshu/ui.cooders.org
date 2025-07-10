import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { DeviceBlocker, Footer, Header, Sidebar } from "../components";

const StudioLayout: React.FC = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  if (!isMobileOrTablet)
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

  return <DeviceBlocker />;
};

export default StudioLayout;
