import React, { useState } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { AuthFormContainer, SubmitButton, TextInput } from "../components";

interface ChangePasswordFormDataInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

const ChangePassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialData: ChangePasswordFormDataInterface = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] =
    useState<ChangePasswordFormDataInterface>(initialData);

  return (
    <AuthFormContainer formTitle="$ reset --pwd">
      <TextInput
        id="changepassword-email"
        inputType="text"
        label="Email Address"
        required={true}
      />
      <TextInput
        id="changepassword-password"
        inputType="password"
        label="Password"
        required={true}
      />
      <TextInput
        id="changepassword-confirmpassword"
        inputType="password"
        label="Confirm Password"
        required={true}
      />
      <section className="pt-1">
        <p className="mb-[20px] text-text-secondary text-[17px] font-medium transition-all duration-200 text-center">
          {"if(rememberPassword) "}
          <span
            className="hover:text-accent cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            {"SignIn()"}
          </span>
        </p>
      </section>
      <SubmitButton label="Submit" includeBottomMargin={false} />
    </AuthFormContainer>
  );
};

export default ChangePassword;
