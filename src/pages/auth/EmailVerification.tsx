import React, { useCallback, useState, type FormEvent } from "react";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdOutlineMail } from "react-icons/md";
import { AUTH_DATA } from "../../data";

const EmailVerification: React.FC = () => {
  const [formData, setFormData] = useState<EmailVerificationFormDataInterface>(
    AUTH_DATA.INITIAL_DATA.EMAIL_VERIFICATION
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
      formTitle="verify(email)"
      handleFormSubmit={handleFormSubmit}
    >
      <TextInput
        id="emailverification-email"
        inputType="email"
        label="Email Address"
        required={true}
        lowercase={true}
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
      <section className="mt-[22px]">
        <SubmitButton label="Submit" includeBottomMargin={false} />
      </section>
    </AuthFormContainer>
  );
};

export default EmailVerification;
