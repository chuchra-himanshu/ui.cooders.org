import React, { useState } from "react";
import {
  AuthFormContainer,
  CheckboxInput,
  FormDivider,
  SocialAuth,
  SubmitButton,
  TextInput,
} from "../components";

const SignIn: React.FC = () => {
  const [toggleCheckbox, setToggleCheckbox] = useState<boolean>(false);

  return (
    <AuthFormContainer formTitle="Sign In">
      <TextInput
        id="signin-username"
        inputType="text"
        label="Username"
        required={true}
      />
      <TextInput
        id="signin-password"
        inputType="password"
        label="Password"
        required={true}
      />
      <section className="pt-1">
        <section className="flex items-center justify-between w-[400px] h-[24px] mb-[22px]">
          <CheckboxInput
            id="signin-rememberme"
            label="Remember Me"
            handleCheckboxClick={() => setToggleCheckbox((prev) => !prev)}
            checkboxClickStatus={toggleCheckbox}
          />
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
      <SubmitButton label="Submit" />
      <FormDivider />
      <SocialAuth />
    </AuthFormContainer>
  );
};

export default SignIn;
