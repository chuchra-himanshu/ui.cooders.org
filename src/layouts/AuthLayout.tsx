import React from "react";
import { Outlet } from "react-router-dom";
import { AuthLayoutButton, Logo } from "../elements";

const AuthLayout: React.FC = () => {
  return (
    <section className="h-screen bg-background-primary flex flex-col justify-between">
      <section className="flex h-[110px] items-center justify-between px-6 ">
        <Logo classes="w-[110px] h-[110px]" />
        <AuthLayoutButton title="SKIP" />
      </section>
      <Outlet />
    </section>
  );
};

export default AuthLayout;
