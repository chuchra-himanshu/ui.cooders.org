const USERNAME_VALIDATIONS = [
  {
    title: "Length 3 – 30 Characters",
    key: "length",
    status: false,
    validate: (value: string) => value.length >= 3 && value.length <= 30,
  },
  {
    title: "Letters, Numbers, Hyphens Only",
    key: "pattern",
    status: false,
    validate: (value: string) =>
      /^[a-zA-Z0-9-]+$/.test(value) && /[a-zA-Z0-9]/.test(value),
  },
];

const PASSWORD_VALIDATIONS = [
  {
    title: "Length 8–60 Characters",
    key: "length",
    status: false,
    validate: (value: string) => value.length >= 8 && value.length <= 60,
  },
  {
    title: "At Least One Uppercase Letter",
    key: "uppercase",
    status: false,
    validate: (value: string) => /[A-Z]/.test(value),
  },
  {
    title: "At Least One Lowercase Letter",
    key: "lowercase",
    status: false,
    validate: (value: string) => /[a-z]/.test(value),
  },
  {
    title: "At Least One Number",
    key: "number",
    status: false,
    validate: (value: string) => /\d/.test(value),
  },
  {
    title: "One Special Character (!@#$%^&*)",
    key: "special",
    status: false,
    validate: (value: string) => /[!@#$%^&*]/.test(value),
  },
];

export default {
  USERNAME_VALIDATIONS,
  PASSWORD_VALIDATIONS,
};
