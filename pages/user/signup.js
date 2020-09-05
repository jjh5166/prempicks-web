import React from 'react';

import Layout from '../../components/Layout';
import SignUpForm from '../../components/UserForm/SignUp';

const SignupPage = () => (
  <Layout title="Sign Up" hideNav={true}>
    <SignUpForm />
  </Layout>
);

export default SignupPage;