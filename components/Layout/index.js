import React from 'react';
import Head from 'next/head';

import NavBar from './NavBar';
import { PageContainer, ContentContainer } from './styled';

const Layout = ({ children, title = "Prempicks", hideNav = false }) => {

  return (
    <PageContainer>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {!hideNav && <NavBar />}
      <ContentContainer>
        {children}
      </ContentContainer>
    </PageContainer>
  );
};

export default Layout;