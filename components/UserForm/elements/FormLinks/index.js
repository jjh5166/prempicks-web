import React, { Fragment } from 'react'
import ForgotPwordLink from './ForgotPassword';
import HaveAcctLoginLink from './HaveAccountLogin';
import NoAccountSignUpLink from './NoAccountSignUp';

export default function FormLinks({ formType }) {
  switch (formType) {
    case 'Login':
      return (
        <Fragment>
          <ForgotPwordLink /><br/>
          <NoAccountSignUpLink />
        </Fragment>
      );
    case 'Sign Up':
      return <HaveAcctLoginLink />;
    default:
      return null;
  }
}