import * as yup from 'yup';

export const validationSchema = yup.object({
  first_name: yup
    .string()
    .required('First Name is required')
    .max(10),
  last_name: yup
    .string()
    .required('Last Name is required')
    .max(20),
  team_name: yup
    .string()
    .required('Team Name is required')
    .max(20)
})