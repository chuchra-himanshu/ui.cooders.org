import React, { useCallback, useState, type FormEvent } from "react";
import { AUTH_DATA } from "../../data";
import {
  AuthFormContainer,
  InputWithValidation,
  SubmitButton,
  TextInput,
} from "../../components";
import { MdDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { AUTH_ZOD_VALIDATIONS } from "../../validations";
import { HELPER_UTILITY } from "../../utils";

const ChooseUsername: React.FC = () => {
  const [formData, setFormData] = useState<ChooseUsernameFormDataInterface>(
    AUTH_DATA.INITIAL_DATA.CHOOSE_USERNAME
  );
  const [usernameValidations, setUsernameValidations] = useState(
    AUTH_DATA.USERNAME_VALIDATIONS
  );

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
    },
    []
  );

  const handleFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { CHOOSE_USERNAME_VALIDATION_SCHEMA } = AUTH_ZOD_VALIDATIONS;
    const data = HELPER_UTILITY.VALIDATE_DATA(
      formData,
      CHOOSE_USERNAME_VALIDATION_SCHEMA
    );

    if (!data) return;
  }, []);

  return (
    <AuthFormContainer
      formTitle="Signing Up"
      handleFormSubmit={handleFormSubmit}
    >
      <TextInput
        id="signup-email"
        inputType="email"
        label="Email Address"
        required={true}
        lowercase={true}
        name="email"
        value={formData.email}
        handleInputChange={handleInputChange}
        Icon={MdOutlineMail}
        disabled={true}
      />
      <InputWithValidation validations={usernameValidations}>
        <TextInput
          id="signup-username"
          inputType="text"
          label="Username"
          name="username"
          value={formData.username}
          required={true}
          lowercase={true}
          handleInputChange={handleInputChange}
          Icon={MdDriveFileRenameOutline}
        />
      </InputWithValidation>
      <section className="mt-[22px]">
        <SubmitButton label="Submit" includeBottomMargin={false} />
      </section>
    </AuthFormContainer>
  );
};

export default ChooseUsername;
