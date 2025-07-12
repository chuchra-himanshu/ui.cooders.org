import React from "react";
import { StudioSidebar } from "../components";
import { BuilderButton } from "../elements";

const Studio: React.FC = () => {
  return (
    <section className="flex relative w-screen">
      <StudioSidebar />
      <BuilderButton />
    </section>
  );
};

export default Studio;
