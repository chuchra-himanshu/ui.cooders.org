interface TextInputPropsInterface {
  id: string;
  label: string;
  required: boolean;
  inputType: string;
  placeholder?: string;
  name: string;
  value: string;
  disabled?: boolean;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PasswordInputPropsInterface {
  id: string;
  label: string;
  required: boolean;
  placeholder?: string;
  name: string;
  value: string;
  disabled?: boolean;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
