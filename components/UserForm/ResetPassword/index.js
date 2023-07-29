import UserForm from '../Base'
import { initialValues, emailField, resetPasswordFn } from './formConfig'
import { validationSchema } from './validate'

export default function ResetPasswordForm() {
    return (
        <UserForm
            name="Reset Password"
            initialValues={initialValues}
            validationSchema={validationSchema}
            fields={emailField}
            submitFn={resetPasswordFn}
        />
    )
}
