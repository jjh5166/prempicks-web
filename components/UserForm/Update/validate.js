import * as yup from 'yup'

export const validationSchema = yup.object({
  team_name: yup.string().required('Team Name is required').max(20),
  email: yup.string().email().required('Email is required'),
})
