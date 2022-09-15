import React from 'react'

import UserForm from '../Base/'
import { initialValues, signupFields, signupFn } from './formConfig'
import { validationSchema } from './validate'

export default function SignupForm() {
    return (
        <UserForm
            name="Sign Up"
            initialValues={initialValues}
            validationSchema={validationSchema}
            fields={signupFields}
            submitFn={signupFn}
        />
    )
}
