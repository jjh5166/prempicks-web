import * as yup from 'yup';

export const validationSchema = yup.object({
  fname: yup
    .string()
    .required('First Name is required')
    .max(10),
  lname: yup
    .string()
    .required('Last Name is required')
    .max(20),
  team_name: yup
    .string()
    .required('Team Name is required')
    .max(20),
  email: yup
    .string()
    .email()
    .required('Email is required'),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Passwords don't match"
    )
    .required("Please confirm password")
});