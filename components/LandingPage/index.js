import React from "react";
import Link from 'next/link';

import Layout from '../Layout';

import { BigTitle, LandingButtonsContainer, LandingButton } from './styled';

export default function Home() {
  return (
    <Layout hideNav={true}>
      <BigTitle>Prem Picks</BigTitle>
      <LandingButtonsContainer>
        <Link href="/user/login">
          <LandingButton>Log In</LandingButton>
        </Link>
        <Link href="/user/signup">
          <LandingButton className="btn-success">Sign Up</LandingButton>
        </Link>
      </LandingButtonsContainer>
    </Layout>
  );
}