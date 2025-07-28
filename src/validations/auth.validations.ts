import { z } from "zod";

const SIGNUP_VALIDATION_SCHEMA = z.object({
  email: z.email("Please enter a valid email address"),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .regex(
      /^[a-zA-Z0-9-]+$/,
      "Username only include letters, numbers, and hyphens"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(60, "Password must be at most 60 characters")
    .regex(/[A-Z]/, "Password must include at least one uppercase")
    .regex(/[a-z]/, "Password must include at least one lowercase")
    .regex(/[0-9]/, "Password must include at least one number")
    .regex(
      /[!@#$%^&*]/,
      "Password must include at least one special character !@#$%^&*"
    ),
  rememberMe: z.boolean().refine((val) => typeof val === "boolean", {
    message: "Remember Me must be a boolean value",
  }),
});

const SIGNIN_VALIDATION_SCHEMA = z.object({
  username: z.string().min(1, "Please enter a valid username"),
  password: z.string().min(1, "Please enter a valid password"),
  rememberMe: z.boolean().refine((val) => typeof val === "boolean", {
    message: "Remember Me must be a boolean value",
  }),
});

const FORGET_PASSWORD_VALIDATION_SCHEMA = z.object({
  email: z.email("Please enter a valid email address"),
  otp: z.string().length(6, "Please enter a valid OTP"),
});

const EMAIL_VERIFICATION_VALIDATION_SCHEMA = z.object({
  email: z.email("Please enter a valid email address"),
  otp: z.string().length(6, "Please enter a valid OTP"),
});

const TFA_VALIDATION_SCHEMA = z.object({
  email: z.email("Please enter a valid email address"),
  otp: z.string().length(6, "Please enter a valid OTP"),
});

const CHANGE_PASSWORD_VALIDATION_SCHEMA = z
  .object({
    email: z.email("Please enter a valid email address"),
    password: z.string().min(1, "Please enter a valid password"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default {
  SIGNUP_VALIDATION_SCHEMA,
  SIGNIN_VALIDATION_SCHEMA,
  FORGET_PASSWORD_VALIDATION_SCHEMA,
  EMAIL_VERIFICATION_VALIDATION_SCHEMA,
  TFA_VALIDATION_SCHEMA,
  CHANGE_PASSWORD_VALIDATION_SCHEMA,
};
