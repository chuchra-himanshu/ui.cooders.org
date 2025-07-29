import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const InputWithValidation: React.FC<InputWithValidationPropsInterface> = ({
  children,
  validations,
}) => {
  return (
    <div className="relative w-full max-w-md group">
      {children}
      <div className="absolute top-0 left-full ml-12 w-[315px] bg-overlay-primary p-4 rounded-[10px] shadow-md hidden group-focus-within:block">
        <section className="flex flex-col gap-1">
          {validations?.map((item, index) => (
            <div key={index} className="flex gap-3 items-center">
              <div
                className={`flex items-center justify-center bg-background-primary h-[30px] w-[30px] rounded-full cursor-pointer transition-all ease-in-out duration-200 ${
                  item.status
                    ? "hover:bg-green-400/5 text-green-400"
                    : "hover:bg-red-400/5 text-red-400"
                }`}
              >
                <FaCheckCircle className="" size={18} />
              </div>
              <p className="text-text-primary text-sm">{item.title}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default InputWithValidation;
