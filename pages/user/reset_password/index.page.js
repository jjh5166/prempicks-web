import React from 'react';

import Layout from '../../../components/Layout';
import UserForm from '../../../components/UserForm';
import { initialValues, emailField, resetPasswordFn } from './formConfig';
import { validationSchema } from './validate';

export default function ResetPasswordPage() {

  return (
    <Layout title="Reset Password" hideNav={true}>
      <UserForm
        name="Reset Password"
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={emailField}
        submitFn={resetPasswordFn}
      />
    </Layout>
  );
}