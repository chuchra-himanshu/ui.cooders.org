import React, { useCallback, useState, type FormEvent } from "react";
import {
  AuthFormContainer,
  CheckboxInput,
  FormDivider,
  InputWithValidation,
  PasswordInput,
  SocialAuth,
  SubmitButton,
  TextInput,
} from "../../components";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import { HELPER_UTILITY } from "../../utils";
import { MdDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { AUTH_DATA } from "../../data";
import { AUTH_ZOD_VALIDATIONS } from "../../validations";
import { AUTH_LOCAL_SERVICES } from "../../redux";
import { toast } from "sonner";

const SignUp: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<SignUpFormDataInterface>(
    AUTH_DATA.INITIAL_DATA.SIGNUP
  );
  const [usernameValidations, setUsernameValidations] = useState(
    AUTH_DATA.USERNAME_VALIDATIONS
  );
  const [passwordValidations, setPasswordValidations] = useState(
    AUTH_DATA.PASSWORD_VALIDATIONS
  );
  const { useSignupMutation } = AUTH_LOCAL_SERVICES;
  const [signupDispatch] = useSignupMutation();

  const handleCheckboxChange = useCallback(() => {
    setFormData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }));
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      if (name === "username") {
        setUsernameValidations((prevValidations) =>
          prevValidations.map((rule) => {
            const isValid = rule.validate(value);
            return { ...rule, status: isValid };
          })
        );
      }
      if (name === "password") {
        setPasswordValidations((prevValidations) =>
          prevValidations.map((rule) => {
            const isValid = rule.validate(value);
            return { ...rule, status: isValid };
          })
        );
      }
    },
    []
  );

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { SIGNUP_VALIDATION_SCHEMA } = AUTH_ZOD_VALIDATIONS;
      const data = await HELPER_UTILITY.VALIDATE_DATA(
        formData,
        SIGNUP_VALIDATION_SCHEMA
      );

      if (!data) return;

      try {
        const response = await signupDispatch({ apiData: data }).unwrap();
        setFormData(AUTH_DATA.INITIAL_DATA.SIGNUP);
        toast.success(response.message);
      } catch (error: any) {
        toast.error(
          error?.data?.message || "Something went wrong, Sign up failed!"
        );
      }
    },
    [formData]
  );

  const generateRandomPassword = () => {
    const randomPassword = HELPER_UTILITY.GENERATE_RANDOM_PASSWORD();
    setFormData((prev) => ({ ...prev, password: randomPassword }));
    setPasswordValidations((prevValidations) =>
      prevValidations.map((rule) => {
        const isValid = rule.validate(randomPassword);
        return { ...rule, status: isValid };
      })
    );
  };

  const SwitchToSignIn = () => (
    <p className="text-text-secondary text-[17px] font-medium transition-all duration-200 text-center">
      if(member){" "}
      <span
        className="hover:text-accent cursor-pointer"
        onClick={() => navigate("/signin")}
      >
        {"Sign In()"}
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
        lowercase={true}
        name="email"
        value={formData.email}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
      />
      <InputWithValidation validations={usernameValidations}>
        <TextInput
          id="signup-username"
          inputType="text"
          label="Username"
          name="username"
          value={formData.username}
          required={true}
          lowercase={true}
          handleInputChange={handleInputChange}
          Icon={MdDriveFileRenameOutline}
        />
      </InputWithValidation>
      <InputWithValidation validations={passwordValidations}>
        <PasswordInput
          id="signup-password"
          label="Password"
          name="password"
          value={formData.password}
          required={true}
          handleInputChange={handleInputChange}
          generateRandomPassword={generateRandomPassword}
        />
      </InputWithValidation>
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
