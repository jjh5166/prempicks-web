import * as yup from 'yup'

export const validationSchema = yup.object({
    team_name: yup
        .string()
        .required('Please enter a name for your team')
        .max(20),
})
