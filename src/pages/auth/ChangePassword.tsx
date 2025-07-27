import React, { useCallback, useState, type FormEvent } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import {
  AuthFormContainer,
  PasswordInput,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdOutlineMail } from "react-icons/md";

const ChangePassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialData: ChangePasswordFormDataInterface = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] =
    useState<ChangePasswordFormDataInterface>(initialData);

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

  return (
    <AuthFormContainer
      formTitle="$ reset --pwd"
      handleFormSubmit={handleFormSubmit}
    >
      <TextInput
        id="changepassword-email"
        inputType="email"
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        disabled={true}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
      />
      <PasswordInput
        id="changepassword-password"
        label="Password"
        name="password"
        value={formData.password}
        required={true}
        handleInputChange={handleInputChange}
      />
      <PasswordInput
        id="changepassword-confirmpassword"
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        required={true}
        handleInputChange={handleInputChange}
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
