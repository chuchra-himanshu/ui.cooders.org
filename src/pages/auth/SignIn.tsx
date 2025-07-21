import React, { useState } from "react";
import {
  AuthFormContainer,
  CheckboxInput,
  FormDivider,
  SocialAuth,
  SubmitButton,
  TextInput,
} from "../../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";

interface SignInFormDataInterface {
  username: string;
  password: string;
  rememberMe: boolean;
}

const SignIn: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialData: SignInFormDataInterface = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const [formData, setFormData] =
    useState<SignInFormDataInterface>(initialData);

  const handleCheckboxChange = () => {
    setFormData((prev) => ({ ...prev, ["rememberMe"]: !prev.rememberMe }));
  };

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
        <section className="flex items-center justify-between w-full h-[24px] mb-[18px]">
          <CheckboxInput
            id="signin-rememberme"
            label="Remember Me"
            handleCheckboxClick={handleCheckboxChange}
            checkboxClickStatus={formData.rememberMe}
          />
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-text-secondary hover:text-accent text-[17px] font-medium transition-all duration-200 mt-[1.5px] cursor-pointer"
          >
            Forgot Password
          </button>
        </section>
        <p className="mb-[20px] text-text-secondary text-[17px] font-medium transition-all duration-200 text-center">
          {"if(!isMember) "}
          <span
            className="hover:text-accent cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            {"SignUp()"}
          </span>
        </p>
      </section>
      <SubmitButton label="Submit" />
      <FormDivider />
      <SocialAuth />
    </AuthFormContainer>
  );
};

export default SignIn;
