import React from "react";

const FormDivider: React.FC<FormDividerPropsInterface> = ({ label = "OR" }) => {
  return (
    <div className="flex items-center justify-center gap-4 w-[400px] text-text-secondary mb-[22px]">
      <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-text-secondary/40 to-text-secondary/40" />
      <p className="text-xs sm:text-sm font-medium tracking-wide">{label}</p>
      <div className="flex-1 h-[2px] bg-gradient-to-r from-text-secondary/40 via-text-secondary/40 to-transparent" />
    </div>
  );
};

export default FormDivider;
