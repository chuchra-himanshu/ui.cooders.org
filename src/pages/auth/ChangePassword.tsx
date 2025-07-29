import React, { useCallback, useState, type FormEvent } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import {
  AuthFormContainer,
  InputWithValidation,
  PasswordInput,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdOutlineMail } from "react-icons/md";
import { AUTH_DATA } from "../../data";
import { HELPER_UTILITY } from "../../utils";
import { AUTH_ZOD_VALIDATIONS } from "../../validations";
import { AUTH_LOCAL_SERVICES } from "../../redux";
import { toast } from "sonner";

const ChangePassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<ChangePasswordFormDataInterface>(
    AUTH_DATA.INITIAL_DATA.CHANGE_PASSWORD
  );
  const [passwordValidations, setPasswordValidations] = useState(
    AUTH_DATA.PASSWORD_VALIDATIONS
  );
  const [forgetPasswordDispatch] =
    AUTH_LOCAL_SERVICES.useForgetPasswordMutation();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
      if (e.target.name === "password") {
        setPasswordValidations((prevValidations) =>
          prevValidations.map((rule) => {
            const isValid = rule.validate(e.target.value);
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
      const { CHANGE_PASSWORD_VALIDATION_SCHEMA } = AUTH_ZOD_VALIDATIONS;
      const data = HELPER_UTILITY.VALIDATE_DATA(
        formData,
        CHANGE_PASSWORD_VALIDATION_SCHEMA
      );

      if (!data) return;

      try {
        const response = await forgetPasswordDispatch({
          apiData: data,
        }).unwrap();
        setFormData(AUTH_DATA.INITIAL_DATA.CHANGE_PASSWORD);
        toast.success(response.message);
      } catch (error: any) {
        toast.error(
          error?.data?.message ||
            "Something went wrong, password update failed!"
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

  return (
    <AuthFormContainer
      formTitle="$ reset --pwd"
      handleFormSubmit={handleFormSubmit}
    >
      <TextInput
        id="changepassword-email"
        inputType="email"
        lowercase={true}
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        disabled={true}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
      />
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
