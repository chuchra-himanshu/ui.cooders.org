import React from "react";

const SubmitButton: React.FC<SubmitButtonPropsInterface> = ({
  label,
  includeBottomMargin = true,
}) => {
  return (
    <button
      className={`cursor-pointer focus:border-accent ${
        includeBottomMargin ? "mb-[18px]" : "mb-[9px]"
      } font-medium outline-none w-full rounded-[10px] text-text-secondary px-3 pt-[7px] pb-[8px] border-2 border-border-primary hover:text-text-primary hover:border-accent transition-all ease-in-out duration-200`}
      type="submit"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
