import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from '../../components/Layout';


export default function GuestWelcomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "GUEST_LOGIN" });
  }, []);
  return (
    <Layout>

    </Layout>
  );
};
