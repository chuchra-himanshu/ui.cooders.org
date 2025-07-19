import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthLayoutButton, Logo } from "../elements";

const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen bg-background-primary flex flex-col justify-between pt-2">
      <section className="flex h-[85px] items-center justify-between px-6 ">
        <Logo classes="w-[85px] h-[85px]" />
        <AuthLayoutButton title="SKIP" clickListener={() => navigate("/")} />
      </section>
      <Outlet />
    </section>
  );
};

export default AuthLayout;
