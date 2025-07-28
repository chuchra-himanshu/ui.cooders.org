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
import { HELPER_UTILITY } from "../../utils";
import { MdDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { AUTH_DATA } from "../../data";
import { FaCheckCircle } from "react-icons/fa";

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
  const [usernameValidations, setUsernameValidations] = useState(
    AUTH_DATA.USERNAME_VALIDATIONS
  );
  const [passwordValidations, setPasswordValidations] = useState(
    AUTH_DATA.PASSWORD_VALIDATIONS
  );

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

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const generateRandomPassword = () => {
    const randomPassword = HELPER_UTILITY.GENERATE_RANDOM_PASSWORD();
    setFormData((prev) => ({ ...prev, password: randomPassword }));
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
        name="email"
        value={formData.email}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
      />
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-md group">
          <TextInput
            id="signup-username"
            inputType="text"
            label="Username"
            name="username"
            value={formData.username}
            required={true}
            handleInputChange={handleInputChange}
            Icon={MdDriveFileRenameOutline}
          />
          <div className="absolute top-0 left-full ml-12 w-[315px] bg-overlay-primary p-4 rounded-[10px] shadow-md hidden group-focus-within:block">
            <section className="flex flex-col gap-1">
              {usernameValidations?.map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div
                    className={`flex items-center justify-center bg-background-primary h-[30px] w-[30px] rounded-full cursor-pointer transition-all ease-in-out duration-200 ${
                      item.status
                        ? "hover:bg-green-400/5 text-green-400"
                        : "hover:bg-red-400/5 text-red-400"
                    }`}
                  >
                    <FaCheckCircle className="" size={18} />
                  </div>
                  <p className="text-text-primary text-sm">{item.title}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-md group">
        <PasswordInput
          id="signup-password"
          label="Password"
          name="password"
          value={formData.password}
          required={true}
          handleInputChange={handleInputChange}
          generateRandomPassword={generateRandomPassword}
        />
        <div className="absolute top-0 left-full ml-12 w-[315px] bg-overlay-primary p-4 rounded-[10px] shadow-md hidden group-focus-within:block">
          <section className="flex flex-col gap-1">
            {passwordValidations?.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div
                  className={`flex items-center justify-center bg-background-primary h-[30px] w-[30px] rounded-full cursor-pointer transition-all ease-in-out duration-200 ${
                    item.status
                      ? "hover:bg-green-400/5 text-green-400"
                      : "hover:bg-red-400/5 text-red-400"
                  }`}
                >
                  <FaCheckCircle className="" size={18} />
                </div>
                <p className="text-text-primary text-sm">{item.title}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
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
