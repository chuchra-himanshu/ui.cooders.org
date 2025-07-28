import React, { useCallback, useState, type FormEvent } from "react";
import { AUTH_DATA } from "../../data";
import { AuthFormContainer, SubmitButton, TextInput } from "../../components";
import { MdDriveFileRenameOutline, MdOutlineMail } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

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
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-md group">
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
      <section className="mt-[10px]">
        <SubmitButton label="Submit" includeBottomMargin={false} />
      </section>
    </AuthFormContainer>
  );
};

export default ChooseUsername;
