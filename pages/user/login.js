import React from 'react';

import Layout from '../../components/Layout';
import LoginForm from '../../components/UserForm/Login';

const LoginPage = () => (
  <Layout title="Login" hideNav={true}>
    <LoginForm />
  </Layout>
);

export default LoginPage;