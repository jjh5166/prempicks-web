import React, { useEffect } from 'react';

import Layout from '../../components/Layout';
import SignUpForm from '../../components/UserForm/SignUp';

const SignupPage = () => {
  // immediate redirect to prevent sign up
  useEffect(() => {
    Router.push('/');
  }, []);
  return(
  <Layout title="Sign Up" hideNav={true}>
    <SignUpForm />
  </Layout>
);}

export default SignupPage;