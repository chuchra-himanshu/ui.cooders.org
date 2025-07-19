import React, { useState } from "react";
import {
  AuthFormContainer,
  CheckboxInput,
  FormDivider,
  SocialAuth,
  SubmitButton,
  TextInput,
} from "../components";

interface SignUpFormDataInterface {
  email: string;
  username: string;
  password: string;
  rememberMe: boolean;
}

const SignUp: React.FC = () => {
  const initialData: SignUpFormDataInterface = {
    email: "",
    username: "",
    password: "",
    rememberMe: false,
  };

  const [formData, setFormData] =
    useState<SignUpFormDataInterface>(initialData);

  const handleCheckboxChange = () => {
    setFormData((prev) => ({ ...prev, ["rememberMe"]: !prev.rememberMe }));
  };

  return (
    <AuthFormContainer formTitle="Sign Up">
      <TextInput
        id="signup-email"
        inputType="email"
        label="Email Address"
        required={true}
      />
      <TextInput
        id="signup-username"
        inputType="text"
        label="Username"
        required={true}
      />
      <TextInput
        id="signup-password"
        inputType="password"
        label="Password"
        required={true}
      />
      <section className="pt-1">
        <section className="flex items-center justify-between w-[400px] h-[24px] mb-[22px]">
          <CheckboxInput
            id="signup-rememberme"
            label="Remember Me"
            handleCheckboxClick={handleCheckboxChange}
            checkboxClickStatus={formData.rememberMe}
          />
          <button
            type="button"
            className="text-text-secondary hover:text-accent text-[17px] font-medium transition-all duration-200 mt-[1.5px] cursor-pointer"
          >
            Ghost Mode
          </button>
        </section>
        <p className="mb-[22px] text-text-secondary text-[17px] font-medium transition-all duration-200 text-center">
          Already part of cooders?{" "}
          <span className="hover:text-accent cursor-pointer">Sign In</span>
        </p>
      </section>
      <SubmitButton label="Submit" />
      <FormDivider />
      <SocialAuth />
    </AuthFormContainer>
  );
};

export default SignUp;
