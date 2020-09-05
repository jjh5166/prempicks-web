import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { useStore } from '../store';
import { FirebaseProvider } from '../components/Firebase'
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <FirebaseProvider>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MuiThemeProvider>
      </FirebaseProvider>
    </Provider>
  );
};