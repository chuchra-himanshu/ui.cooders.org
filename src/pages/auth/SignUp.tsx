import React, { useCallback, useState, type FormEvent } from "react";
import {
  AuthFormContainer,
  CheckboxInput,
  FormDivider,
  SocialAuth,
  SubmitButton,
  TextInput,
} from "../../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";

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

  const SwitchToSignIn = () => (
    <p className="text-text-secondary text-[17px] font-medium transition-all duration-200 text-center mt-[1.5px]">
      Already a member?{" "}
      <span
        className="hover:text-accent cursor-pointer"
        onClick={() => navigate("/signin")}
      >
        Sign In
      </span>
    </p>
  );

  return (
    <AuthFormContainer formTitle="Sign Up" handleFormSubmit={handleFormSubmit}>
      <TextInput
        id="signup-email"
        inputType="email"
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        handleInputChange={handleInputChange}
      />
      <TextInput
        id="signup-username"
        inputType="text"
        label="Username"
        name="username"
        value={formData.username}
        required={true}
        handleInputChange={handleInputChange}
      />
      <TextInput
        id="signup-password"
        inputType="password"
        label="Password"
        name="password"
        value={formData.password}
        required={true}
        handleInputChange={handleInputChange}
      />
      <section className="pt-1">
        <section className="flex items-center justify-between w-full h-[24px] mb-[20px]">
          <CheckboxInput
            id="signup-rememberme"
            label="Remember Me"
            handleCheckboxClick={handleCheckboxChange}
            checkboxClickStatus={formData.rememberMe}
          />
          <SwitchToSignIn />
        </section>
      </section>
      <SubmitButton label="Submit" />
      <FormDivider />
      <SocialAuth />
    </AuthFormContainer>
  );
};

export default SignUp;
