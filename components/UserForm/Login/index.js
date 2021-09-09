import React from 'react'

import UserForm from '../Base'
import { initialValues, loginFields, loginFn } from './formConfig'
import { validationSchema } from './validate'

export default function LoginForm() {
  return (
    <UserForm
      name='Login'
      initialValues={initialValues}
      validationSchema={validationSchema}
      fields={loginFields}
      submitFn={loginFn}
    />
  )
}
