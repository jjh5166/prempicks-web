import React from "react";
import Link from 'next/link';

import Layout from '../Layout';

import { BigTitle, LandingButtonsContainer, LandingButton } from './styled';

export default function Home() {
  return (
    <Layout hideNav={true}>
      <BigTitle>Prem Picks</BigTitle>
      <LandingButtonsContainer>
        <Link href="/login">
          <LandingButton>Log In</LandingButton>
        </Link>
        <Link href="/signup">
          <LandingButton className="btn-success">Sign Up</LandingButton>
        </Link>
      </LandingButtonsContainer>
    </Layout>
  );
}