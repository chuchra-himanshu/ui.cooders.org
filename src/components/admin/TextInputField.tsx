import React from "react";

interface TextInputFieldPropsInterface {
  id: string;
  label: string;
  placeholder: string;
}

const TextInputField: React.FC<TextInputFieldPropsInterface> = ({
  id,
  label,
  placeholder,
}) => {
  return (
    <div className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-[2px] transition-all ease-in-out duration-200 mb-[14px]">
      <label htmlFor={id} className="text-[16px] ml-1">
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="outline-none w-full rounded-[10px] px-3 py-2 border-2 border-border-primary focus:text-text-primary focus:border-accent transition-all ease-in-out duration-200"
      />
    </div>
  );
};

export default TextInputField;
