import React from "react";

const Dialog: React.FC<DialogPropsInterface> = ({ children }) => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-background-primary z-20 transition-all ease-in-out duration-700"></div>
      <section className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-950 text-text-primary p-6 rounded-[10px] shadow-xl w-[450px] transition-all ease-in-out duration-700">
        {children}
      </section>
    </React.Fragment>
  );
};

export default Dialog;
