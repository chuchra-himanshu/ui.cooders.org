import React, { useCallback, useState, type FormEvent } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../../components";

const ForgetPassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialData: ForgetPasswordFormDataInterface = {
    email: "",
    otp: "",
  };

  const [formData, setFormData] =
    useState<ForgetPasswordFormDataInterface>(initialData);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const SwitchToSignIn = () => (
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
  );

  return (
    <AuthFormContainer
      formTitle="forgot(pwd)"
      handleFormSubmit={handleFormSubmit}
    >
      <TextInput
        id="forgetpassword-email"
        inputType="email"
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        handleInputChange={handleInputChange}
      />
      <OTPInput />
      <SwitchToSignIn />
      <SubmitButton label="Submit" includeBottomMargin={false} />
    </AuthFormContainer>
  );
};

export default ForgetPassword;
