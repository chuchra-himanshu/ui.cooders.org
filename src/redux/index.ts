import {
  useSignupMutation,
  useSigninMutation,
  useLazySignoutQuery,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useChangeUsernameMutation,
} from "./auth/local.auth.service";
import {
  useLazyGoogleOAuthQuery,
  useLazyGithubOAuthQuery,
  useLazyLinkedInOAuthQuery,
} from "./auth/social.auth.service";
import {
  useLazyGenerateForgetPasswordTokenQuery,
  useVerifyForgetPasswordTokenMutation,
  useLazyGenerateEmailVerificationTokenQuery,
  useVerifyEmailVerificationTokenMutation,
  useLazyGenerateTFATokenQuery,
  useVerifyTFATokenMutation,
} from "./auth/token.auth.service";

export const AUTH_LOCAL_SERVICES = {
  useSignupMutation,
  useSigninMutation,
  useLazySignoutQuery,
  useForgetPasswordMutation,
  useChangePasswordMutation,
  useChangeUsernameMutation,
};
export const AUTH_SOCIAL_SERVICES = {
  useLazyGoogleOAuthQuery,
  useLazyGithubOAuthQuery,
  useLazyLinkedInOAuthQuery,
};
export const AUTH_TOKEN_SERVICES = {
  useLazyGenerateForgetPasswordTokenQuery,
  useVerifyForgetPasswordTokenMutation,
  useLazyGenerateEmailVerificationTokenQuery,
  useVerifyEmailVerificationTokenMutation,
  useLazyGenerateTFATokenQuery,
  useVerifyTFATokenMutation,
};
