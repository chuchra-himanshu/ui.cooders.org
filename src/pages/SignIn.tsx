import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { SiGithub, SiGoogle, SiLinkedin } from "react-icons/si";

const SignIn: React.FC = () => {
  const [toggleCheckbox, setToggleCheckbox] = useState<boolean>(false);

  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-40px)]">
      <form className="bg-neutral-950 p-8 rounded-[10px]">
        <p className="text-4xl font-semibold text-text-secondary mb-8">
          Sign In
        </p>
        <div className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-1 transition-all ease-in-out duration-200 mb-[18px]">
          <label htmlFor="signin-username" className="text-[17px] ml-1">
            Username<span className="text-red-800">*</span>
          </label>
          <input
            type="text"
            id="signin-username"
            className="outline-none w-[400px] rounded-[10px] px-3 py-2 border-2 border-border-primary focus:text-text-primary focus:border-accent transition-all ease-in-out duration-200"
          />
        </div>
        <div className="flex flex-col text-text-secondary font-medium focus-within:text-accent gap-1 transition-all ease-in-out duration-200 mb-[18px]">
          <label htmlFor="signin-username" className="text-[17px] ml-1">
            Password<span className="text-red-800">*</span>
          </label>
          <input
            type="text"
            id="signin-username"
            className="outline-none w-[400px] rounded-[10px] px-3 py-2 border-2 border-border-primary focus:text-text-primary focus:border-accent transition-all ease-in-out duration-200"
          />
        </div>
        <section className="pt-1">
          <section className="flex items-center justify-between w-[400px] h-[24px] mb-[22px]">
            <div className="flex items-center gap-[6px] text-text-secondary font-medium transition-all duration-200">
              <button
                type="button"
                onClick={() => setToggleCheckbox((prev) => !prev)}
                className={`h-[19px] w-[19px] border-2 rounded-[4px] flex items-center justify-center transition-all duration-200 ${
                  toggleCheckbox
                    ? "bg-accent border-accent"
                    : "border-border-primary hover:border-accent"
                }`}
              >
                {toggleCheckbox && <FaCheck size={12} color="white" />}
              </button>
              <label
                htmlFor="signin-remember-me"
                className="text-[17.2px] cursor-pointer select-none mt-[1.5px]"
                onClick={() => setToggleCheckbox((prev) => !prev)}
              >
                Remember Me
              </label>
            </div>

            <button
              type="button"
              className="text-text-secondary hover:text-accent text-[17px] font-medium transition-all duration-200 mt-[1.5px] cursor-pointer"
            >
              Forgot Password
            </button>
          </section>
          <p className="mb-[22px] text-text-secondary font-medium transition-all duration-200 text-center">
            New to cooders community?{" "}
            <span className="hover:text-accent cursor-pointer">Sign Up</span>
          </p>
        </section>
        <button className="cursor-pointer mb-[22px] font-medium outline-none w-[400px] rounded-[10px] text-text-secondary px-3 pt-[7px] pb-[9px] border-2 border-border-primary hover:text-text-primary hover:border-accent transition-all ease-in-out duration-200">
          Submit
        </button>
        <div className="flex items-center justify-center gap-4 w-[400px] text-text-secondary mb-[22px]">
          <div className="flex-1 h-[2px] bg-gradient-to-r from-transparent via-text-secondary/40 to-text-secondary/40" />
          <p className="text-xs sm:text-sm font-medium tracking-wide">OR</p>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-text-secondary/40 via-text-secondary/40 to-transparent" />
        </div>
        <section className="flex items-center text-[22px] gap-10 text-text-secondary justify-center">
          <SiGoogle className="hover:text-accent cursor-pointer transition-all ease-in-out duration-200" />
          <SiGithub className="hover:text-accent cursor-pointer transition-all ease-in-out duration-200" />
          <SiLinkedin className="hover:text-accent cursor-pointer transition-all ease-in-out duration-200" />
        </section>
      </form>
    </section>
  );
};

export default SignIn;
