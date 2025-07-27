import React, { useCallback, useState, type FormEvent } from "react";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdOutlineMail } from "react-icons/md";

const EmailVerification: React.FC = () => {
  const initialData: EmailVerificationFormDataInterface = {
    email: "",
    otp: "",
  };

  const [formData, setFormData] =
    useState<EmailVerificationFormDataInterface>(initialData);

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
      formTitle="verify(email)"
      handleFormSubmit={handleFormSubmit}
    >
      <TextInput
        id="emailverification-email"
        inputType="email"
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
      />
      <OTPInput />
      <section className="mt-[22px]">
        <SubmitButton label="Submit" includeBottomMargin={false} />
      </section>
    </AuthFormContainer>
  );
};

export default EmailVerification;
