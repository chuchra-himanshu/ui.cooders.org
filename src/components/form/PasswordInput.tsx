import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { RiKey2Line } from "react-icons/ri";

const PasswordInput: React.FC<PasswordInputPropsInterface> = ({
  id,
  label,
  name,
  required,
  value,
  disabled = false,
  handleInputChange,
  placeholder = "",
  generateRandomPassword,
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
        <section className="flex items-center gap-1 absolute top-[11px] right-3">
          {generateRandomPassword && (
            <RiKey2Line
              className="cursor-pointer text-text-secondary hover:text-accent transition-all duration-200 ease-in-out"
              size={22}
              onClick={generateRandomPassword}
            />
          )}
          <Icon
            className="cursor-pointer text-text-secondary hover:text-accent transition-all duration-200 ease-in-out"
            size={22}
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          />
        </section>
      </div>
    </div>
  );
};

export default PasswordInput;
