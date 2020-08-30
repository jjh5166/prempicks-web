import { MuiThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {

  return (
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  )

}

export default MyApp
