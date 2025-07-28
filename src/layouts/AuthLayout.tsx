import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthLayoutButton, Logo } from "../elements";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen bg-background-primary flex flex-col justify-between pt-2">
      <div
        className="absolute inset-0 z-0
          [background-size:37.5px_37.5px]
          [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] 
          dark:[background-image:linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)]"
      />
      <section className="flex h-[85px] items-center justify-between px-6 z-20">
        <Logo classes="w-[85px] h-[85px]" />
        <AuthLayoutButton title="SKIP" clickListener={() => navigate("/")} />
      </section>
      <section className="z-10">
        <Outlet />
      </section>
    </section>
  );
};

export default AuthLayout;
