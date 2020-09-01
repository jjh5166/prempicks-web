import React from 'react'

import Layout from '../../../components/Layout';
import UserForm from '../../../components/UserForm';
import { initialValues, loginFields, loginFn } from './formConfig';
import { validationSchema } from './validate';

export default function LoginPage() {

  return(
    <Layout title="Login" hideNav={true}>
      <UserForm
      name="Login"
      initialValues={initialValues}
      validationSchema={validationSchema}
      fields={loginFields}
      submitFn={loginFn}
      />
    </Layout>
  )
}