import UserForm from '../Base'
import { updateFields, updateAccountFn } from './formConfig'
import { validationSchema } from './validate'

export default function UpdateAccountForm({ initialValues }) {
    return (
        <UserForm
            name="Update Account"
            initialValues={initialValues}
            validationSchema={validationSchema}
            fields={updateFields}
            submitFn={updateAccountFn}
        />
    )
}
