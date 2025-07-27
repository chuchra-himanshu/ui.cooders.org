import React, { useCallback, useState, type FormEvent } from "react";
import {
  AuthFormContainer,
  CheckboxInput,
  FormDivider,
  PasswordInput,
  SocialAuth,
  SubmitButton,
  TextInput,
} from "../../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";

const SignIn: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const initialData: SignInFormDataInterface = {
    username: "",
    password: "",
    rememberMe: false,
  };

  const [formData, setFormData] =
    useState<SignInFormDataInterface>(initialData);

  const handleCheckboxChange = useCallback(() => {
    setFormData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
  }, []);

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

  const SwitchToSignUp = () => (
    <p className="mb-[20px] text-text-secondary text-[17px] font-medium transition-all duration-200 text-center">
      {"if(!member) "}
      <span
        className="hover:text-accent cursor-pointer"
        onClick={() => navigate("/signup")}
      >
        {"SignUp()"}
      </span>
    </p>
  );

  return (
    <AuthFormContainer formTitle="Sign In" handleFormSubmit={handleFormSubmit}>
      <TextInput
        id="signin-username"
        inputType="text"
        label="Username"
        name="username"
        value={formData.username}
        required={true}
        handleInputChange={handleInputChange}
      />
      <PasswordInput
        id="signin-password"
        label="Password"
        name="password"
        value={formData.password}
        required={true}
        handleInputChange={handleInputChange}
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
        <SwitchToSignUp />
      </section>
      <SubmitButton label="Submit" />
      <FormDivider />
      <SocialAuth />
    </AuthFormContainer>
  );
};

export default SignIn;
