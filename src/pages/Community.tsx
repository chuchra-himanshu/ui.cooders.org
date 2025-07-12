import React from "react";
import { CommunitySidebar, Feed } from "../components";
import { FaPlus } from "react-icons/fa";

const Community: React.FC = () => {
  return (
    <section className="flex relative w-screen justify-between">
      <CommunitySidebar />
      <Feed />
      <section className="w-[220px] border-l border-border-primary p-2">
        <div className="h-10 w-full bg-white/5 text-white/40 hover:bg-accent/5 hover:text-accent flex items-center rounded-[10px] justify-center gap-2 cursor-pointer transition-all ease-in-out duration-200">
          <FaPlus />
          <p className="font-semibold">Create Post</p>
        </div>
      </section>
    </section>
  );
};

export default Community;
