import React, { useCallback, useState, type FormEvent } from "react";
import {
  AuthFormContainer,
  OTPInput,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdOutlineMail } from "react-icons/md";
import { AUTH_DATA } from "../../data";

const TwoFactorAuthentication: React.FC = () => {
  const [formData, setFormData] =
    useState<TwoFactorAuthenticationFormDataInterface>(
      AUTH_DATA.INITIAL_DATA.TFA
    );

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
    <AuthFormContainer formTitle="2FA" handleFormSubmit={handleFormSubmit}>
      <TextInput
        id="tfa-email"
        inputType="email"
        label="Email Address"
        required={true}
        name="email"
        value={formData.email}
        disabled={true}
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

export default TwoFactorAuthentication;
