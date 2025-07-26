interface AuthFormContainerPropsInterface {
  children: ReactNode;
  formTitle: string;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

interface CheckboxInputPropsInterface {
  id: string;
  handleCheckboxClick: () => void;
  label: string;
  checkboxClickStatus: boolean;
}

interface FormDividerPropsInterface {
  label?: string;
}

interface SubmitButtonPropsInterface {
  label: string;
  includeBottomMargin?: boolean;
}
