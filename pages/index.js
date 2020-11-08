import { useEffect } from 'react';
import Router from 'next/router';

import LandingPage from '../components/LandingPage';
import Layout from '../components/Layout';
import { useAuthUser } from '../redux/hooks';


export default function Home() {
  const authUser = useAuthUser();
  useEffect(() => {
    if (authUser) {
      Router.push('/mypicks');
    }
  }, [authUser]);
  return (
    <Layout hideNav={true}>
      <LandingPage />
    </Layout>
  );
};
