import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { wrapper } from '../redux/store';
import { FirebaseProvider } from '../components/Firebase';
import theme from '../styles/theme';

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <FirebaseProvider>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </FirebaseProvider>
  );
};

export default wrapper.withRedux(WrappedApp);