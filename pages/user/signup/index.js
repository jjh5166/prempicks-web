import React from 'react';

import Layout from '../../../components/Layout';
import UserForm from '../../../components/UserForm';
import { initialValues, signupFields, signupFn } from './formConfig';
import { validationSchema } from './validate';

const SignupPage = () => (
  <Layout title="Sign Up" hideNav={true}>
    <UserForm
      name="Sign Up"
      initialValues={initialValues}
      validationSchema={validationSchema}
      fields={signupFields}
      submitFn={signupFn}
    />
  </Layout>
);

export default SignupPage;