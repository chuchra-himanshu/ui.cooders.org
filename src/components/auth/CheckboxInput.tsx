import React from "react";
import { FaCheck } from "react-icons/fa";

const CheckboxInput: React.FC<CheckboxInputPropsInterface> = ({
  id,
  handleCheckboxClick,
  label,
  checkboxClickStatus,
}) => {
  return (
    <div className="flex items-center gap-[6px] text-text-secondary font-medium transition-all duration-200">
      <button
        type="button"
        onClick={handleCheckboxClick}
        className={`h-[19px] w-[19px] border-2 rounded-[4px] flex items-center justify-center transition-all duration-200 ${
          checkboxClickStatus
            ? "bg-accent border-accent"
            : "border-border-primary hover:border-accent"
        }`}
      >
        {checkboxClickStatus && <FaCheck size={12} color="white" />}
      </button>
      <label
        htmlFor={id}
        className="text-[17.2px] cursor-pointer select-none mt-[1.5px]"
        onClick={handleCheckboxClick}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxInput;
