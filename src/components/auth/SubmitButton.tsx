import React from "react";

const SubmitButton: React.FC<SubmitButtonPropsInterface> = ({ label }) => {
  return (
    <button
      className="cursor-pointer mb-[22px] font-medium outline-none w-[400px] rounded-[10px] text-text-secondary px-3 pt-[7px] pb-[9px] border-2 border-border-primary hover:text-text-primary hover:border-accent transition-all ease-in-out duration-200"
      type="submit"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
