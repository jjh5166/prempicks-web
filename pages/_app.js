import React from 'react';
import { Provider } from 'react-redux';
import Div100vh from 'react-div-100vh';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { useStore } from '../store';
import { FirebaseProvider } from '../components/Firebase'
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <FirebaseProvider>
        <MuiThemeProvider theme={theme}>
          <Div100vh>
            <Component {...pageProps} />
          </Div100vh>
        </MuiThemeProvider>
      </FirebaseProvider>
    </Provider>
  );
};