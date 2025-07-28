interface SignUpFormDataInterface {
  email: string;
  username: string;
  password: string;
  rememberMe: boolean;
}

interface SignInFormDataInterface {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface ForgetPasswordFormDataInterface {
  email: string;
  otp: string;
}

interface EmailVerificationFormDataInterface {
  email: string;
  otp: string;
}

interface ChangePasswordFormDataInterface {
  email: string;
  password: string;
  confirmPassword: string;
}

interface TwoFactorAuthenticationFormDataInterface {
  email: string;
  otp: string;
}

interface ChooseUsernameFormDataInterface {
  email: string;
  username: string;
}
