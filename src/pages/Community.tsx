import React from "react";
import { CommunitySidebar, Feed } from "../components";

const Community: React.FC = () => {
  return (
    <section className="flex relative w-screen justify-between">
      <CommunitySidebar />
      <Feed />
      <section className="w-[220px] border-l border-border-primary"></section>
    </section>
  );
};

export default Community;
