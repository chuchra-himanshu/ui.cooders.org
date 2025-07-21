import React, { useState } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../../components";

interface ForgetPasswordFormDataInterface {
  email: string;
  otp: string;
}

const ForgetPassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialData: ForgetPasswordFormDataInterface = {
    email: "",
    otp: "",
  };

  const [formData, setFormData] =
    useState<ForgetPasswordFormDataInterface>(initialData);

  return (
    <AuthFormContainer formTitle="forgot(pwd)">
      <TextInput
        id="forgetpassword-email"
        inputType="text"
        label="Email Address"
        required={true}
      />
      <OTPInput />
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

export default ForgetPassword;
