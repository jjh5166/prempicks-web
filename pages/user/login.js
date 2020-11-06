import { useEffect } from 'react';
import Router from 'next/router';

import Layout from '../../components/Layout';
import LoginForm from '../../components/UserForm/Login';
import useAuthUser from '../../redux/useAuthUser';

const LoginPage = () => {
  const authUser = useAuthUser();
  useEffect(() => {
    if (authUser) {
      Router.push('/mypicks');
    }
  }, [authUser]);

  return (
    <Layout title="Login" hideNav={true}>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;