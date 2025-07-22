import React from "react";

const Dialog: React.FC<DialogPropsInterface> = ({
  handleDialogClose,
  children,
}) => {
  return (
    <React.Fragment>
      <div
        className="fixed inset-0 bg-black/80 z-20 transition-all ease-in-out duration-700"
        onClick={handleDialogClose}
      ></div>
      <section
        className="fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                bg-overlay-primary text-text-primary p-6 rounded shadow-xl w-[90%] max-w-md transition-all ease-in-out duration-700"
      >
        {children}
      </section>
    </React.Fragment>
  );
};

export default Dialog;
