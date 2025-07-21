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

interface SignUpFormDataInterface {
  email: string;
  username: string;
  password: string;
  rememberMe: boolean;
}

const SignUp: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

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
        <section className="flex items-center justify-between w-full h-[24px] mb-[20px]">
          <CheckboxInput
            id="signup-rememberme"
            label="Remember Me"
            handleCheckboxClick={handleCheckboxChange}
            checkboxClickStatus={formData.rememberMe}
          />
          <p className=" text-text-secondary text-[17px] font-medium transition-all duration-200 text-center mt-[1.5px]">
            {"if(isMember) "}
            <span
              className="hover:text-accent cursor-pointer"
              onClick={() => navigate("/signin")}
            >
              {"SignIn()"}
            </span>
          </p>
        </section>
      </section>
      <SubmitButton label="Submit" />
      <FormDivider />
      <SocialAuth />
    </AuthFormContainer>
  );
};

export default SignUp;
