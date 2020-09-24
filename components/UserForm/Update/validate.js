import * as yup from 'yup';

export const validationSchema = yup.object({
  first_name: yup
    .string()
    .max(10),
  last_name: yup
    .string()
    .max(20),
  team_name: yup
    .string()
    .max(20)
})