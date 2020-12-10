import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import Layout from '../../components/Layout';
import SignUpForm from '../../components/UserForm/SignUp';
import { setInfoAlert } from '../../redux/actions/alert';

const SignupPage = () => {
  const dispatch = useDispatch()
  // immediate redirect to prevent sign up
  useEffect(() => {
    Router.push('/');
    dispatch(setInfoAlert('Registration is closed as the season has started.'))
  }, []);
  return(
  <Layout title="Sign Up" hideNav={true}>
    <SignUpForm />
  </Layout>
);}

export default SignupPage;