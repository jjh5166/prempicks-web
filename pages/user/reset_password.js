import React from 'react';

import Layout from '../../components/Layout';
import ResetPasswordForm from '../../components/UserForm/ResetPassword';

const ResetPasswordPage = () => (
  <Layout title="Reset Password" hideNav={true}>
    <ResetPasswordForm />
  </Layout>
);

export default ResetPasswordPage;