import { MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import Firebase, { FirebaseContext } from '../components/Firebase';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {

  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <MuiThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MuiThemeProvider>
    </FirebaseContext.Provider>
  )

}

export default MyApp
