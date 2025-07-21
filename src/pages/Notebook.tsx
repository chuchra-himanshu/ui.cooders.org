import React from "react";
import { NotebookSidebar } from "../components";

const Notebook: React.FC = () => {
  return (
    <section className="flex relative w-screen">
      <NotebookSidebar />
    </section>
  );
};

export default Notebook;
