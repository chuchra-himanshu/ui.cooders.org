import React, { useCallback, useState, type FormEvent } from "react";
import { useNavigate, type NavigateFunction } from "react-router-dom";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdOutlineMail } from "react-icons/md";
import { AUTH_DATA } from "../../data";

const ForgetPassword: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  const [formData, setFormData] = useState<ForgetPasswordFormDataInterface>(
    AUTH_DATA.INITIAL_DATA.FORGET_PASSWORD
  );
  const [otpTitle, setOTPTitle] = useState("Send OTP");

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

  const handleSendOTP = (): void => {
    if (otpTitle != "Send OTP" && otpTitle != "Resend OTP") {
      return;
    }
    setOTPTitle("Sending...");
    setTimeout(() => {
      setOTPTitle("OTP Sent!");
      setTimeout(() => setOTPTitle("Resend OTP"), 2000);
    }, 1000);
  };

  return (
    <AuthFormContainer
      formTitle="forgot(pwd)"
      handleFormSubmit={handleFormSubmit}
    >
      <TextInput
        id="forgetpassword-email"
        inputType="email"
        label="Email Address"
        lowercase={true}
        required={true}
        name="email"
        value={formData.email}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
        inputButton={{
          title: otpTitle,
          handleButtonClick: handleSendOTP,
        }}
      />
      <OTPInput />
      <SwitchToSignIn />
      <SubmitButton label="Submit" includeBottomMargin={false} />
    </AuthFormContainer>
  );
};

export default ForgetPassword;
