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

export default {
  AUTH_LOCAL_SERVICES: {
    useSignupMutation,
    useSigninMutation,
    useLazySignoutQuery,
    useForgetPasswordMutation,
    useChangePasswordMutation,
    useChangeUsernameMutation,
  },
  AUTH_SOCIAL_SERVICES: {
    useLazyGoogleOAuthQuery,
    useLazyGithubOAuthQuery,
    useLazyLinkedInOAuthQuery,
  },
  AUTH_TOKEN_SERVICES: {
    useLazyGenerateForgetPasswordTokenQuery,
    useVerifyForgetPasswordTokenMutation,
    useLazyGenerateEmailVerificationTokenQuery,
    useVerifyEmailVerificationTokenMutation,
    useLazyGenerateTFATokenQuery,
    useVerifyTFATokenMutation,
  },
};
