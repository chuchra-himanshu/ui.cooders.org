import React from "react";
import { StudioSidebar } from "../../components";
import { BuilderButton } from "../../elements";

const Studio: React.FC = () => {
  return (
    <section className="flex relative w-screen">
      <StudioSidebar />
      <BuilderButton />
      <section className="w-full">
        <section className="h-[50%] border-b border-border-primary"></section>
        <section className="h-[50%] flex">
          <section className="w-[50%] border-r border-border-primary"></section>
          <section className="w-[50%]"></section>
        </section>
      </section>
    </section>
  );
};

export default Studio;
