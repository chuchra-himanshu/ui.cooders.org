interface AuthFormContainerPropsInterface {
  children: ReactNode;
  formTitle: string;
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