import React, { useState } from "react";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../components";

interface EmailVerificationFormDataInterface {
  email: string;
  otp: string;
}

const EmailVerification: React.FC = () => {
  const initialData: EmailVerificationFormDataInterface = {
    email: "",
    otp: "",
  };

  const [formData, setFormData] =
    useState<EmailVerificationFormDataInterface>(initialData);

  return (
    <AuthFormContainer formTitle="verify(email)">
      <TextInput
        id="emailverification-email"
        inputType="text"
        label="Email Address"
        required={true}
      />
      <OTPInput />
      <section className="mt-[22px]">
        <SubmitButton label="Submit" includeBottomMargin={false} />
      </section>
    </AuthFormContainer>
  );
};

export default EmailVerification;
