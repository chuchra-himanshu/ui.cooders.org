import React, { useCallback, useState, type FormEvent } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import {
  AuthFormContainer,
  PasswordInput,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdOutlineMail } from "react-icons/md";
import { AUTH_DATA } from "../../data";
import { HELPER_UTILITY } from "../../utils";
import { FaCheckCircle } from "react-icons/fa";

const ChangePassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<ChangePasswordFormDataInterface>(
    AUTH_DATA.INITIAL_DATA.CHANGE_PASSWORD
  );
  const [passwordValidations, setPasswordValidations] = useState(
    AUTH_DATA.PASSWORD_VALIDATIONS
  );

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

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

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
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        disabled={true}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
      />
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
