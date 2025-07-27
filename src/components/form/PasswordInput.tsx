import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const PasswordInput: React.FC<PasswordInputPropsInterface> = ({
  id,
  label,
  name,
  required,
  value,
  disabled = false,
  handleInputChange,
  placeholder = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const Icon = showPassword ? VscEyeClosed : VscEye;

  return (
    <div className="flex flex-col gap-1 font-medium text-text-secondary focus-within:text-accent transition-all duration-200 ease-in-out mb-[14px]">
      <label htmlFor={id} className="ml-1 text-[17px]">
        {label}
        {required && <span className="text-red-800">*</span>}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          disabled={disabled}
          className="w-full pr-10 px-3 py-2 border-2 rounded-[10px] outline-none border-border-primary focus:border-accent focus:text-text-primary transition-all duration-200 ease-in-out"
        />
        <Icon
          className="absolute top-[11px] right-3 cursor-pointer text-text-secondary hover:text-accent transition-all duration-200 ease-in-out"
          size={22}
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        />
      </div>
    </div>
  );
};

export default PasswordInput;
