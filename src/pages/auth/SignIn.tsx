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
import { MdDriveFileRenameOutline } from "react-icons/md";
import { AUTH_DATA } from "../../data";
import { AUTH_ZOD_VALIDATIONS } from "../../validations";
import { HELPER_UTILITY } from "../../utils";
import { AUTH_LOCAL_SERVICES } from "../../redux";
import { toast } from "sonner";

const SignIn: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<SignInFormDataInterface>(
    AUTH_DATA.INITIAL_DATA.SIGNIN
  );
  const [signinDispatch] = AUTH_LOCAL_SERVICES.useSigninMutation();

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

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { SIGNIN_VALIDATION_SCHEMA } = AUTH_ZOD_VALIDATIONS;
      const data = HELPER_UTILITY.VALIDATE_DATA(
        formData,
        SIGNIN_VALIDATION_SCHEMA
      );

      if (!data) return;

      try {
        const response = await signinDispatch({ apiData: data }).unwrap();
        setFormData(AUTH_DATA.INITIAL_DATA.SIGNIN);
        toast.success(response.message);
      } catch (error: any) {
        toast.error(
          error?.data?.message || "Something went wrong, Sign in failed!"
        );
      }
    },
    [formData]
  );

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
        lowercase={true}
        value={formData.username}
        required={true}
        handleInputChange={handleInputChange}
        Icon={MdDriveFileRenameOutline}
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
            className="outline-none focus:text-accent text-text-secondary hover:text-accent text-[17px] font-medium transition-all duration-200 mt-[1.5px] cursor-pointer"
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
