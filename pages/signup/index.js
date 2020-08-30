import React from 'react';

import Layout from '../../components/Layout';
import UserForm from '../../components/UserForm';
import { initialValues, signupFields } from './formConfig';
import { validationSchema } from './validate';

export default function SignupPage() {

  return (
    <Layout title="Sign Up" hideNav={true}>
      <UserForm
        name="Sign Up"
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={signupFields}
      />
    </Layout>
  );
}