import React from "react";
import { IoClose } from "react-icons/io5";

const Dialog: React.FC<DialogPropsInterface> = ({
  children,
  heading,
  handleDialogClose,
}) => {
  return (
    <React.Fragment>
      <div className="absolute inset-0 bg-background-primary z-20 transition-all ease-in-out duration-700"></div>
      <section className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-950 text-text-primary p-6 rounded-[10px] shadow-xl w-[450px] transition-all ease-in-out duration-700">
        <header className="flex items-center justify-between mb-4">
          <h2 className="text-[21px] font-semibold text-text-secondary">
            {heading}
          </h2>
          <button
            onClick={handleDialogClose}
            className="flex items-center justify-center bg-background-primary h-[30px] w-[30px] rounded-full cursor-pointer text-text-secondary hover:bg-accent/5 hover:text-accent transition-all ease-in-out duration-200"
          >
            <IoClose size={22} />
          </button>
        </header>
        {children}
      </section>
    </React.Fragment>
  );
};

export default Dialog;
