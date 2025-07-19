import React, { useState } from "react";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../components";

interface TwoFactorAuthenticationFormDataInterface {
  email: string;
  otp: string;
}

const TwoFactorAuthentication: React.FC = () => {
  const initialData: TwoFactorAuthenticationFormDataInterface = {
    email: "",
    otp: "",
  };

  const [formData, setFormData] =
    useState<TwoFactorAuthenticationFormDataInterface>(initialData);

  return (
    <AuthFormContainer formTitle="2FA">
      <TextInput
        id="tfa-email"
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

export default TwoFactorAuthentication;
