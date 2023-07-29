import { useRouter } from 'next/router'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { wrapper } from '../redux/store'
import { FirebaseProvider } from '../components/Firebase'
import theme from '../styles/theme'
import Layout from 'components/Layout'
import { getLayoutProps } from 'utils/ui/getLayoutProps'
import { CurrentUserProvider } from 'context/currentUser'

const WrappedApp = ({ Component, pageProps }) => {
    const { pathname } = useRouter()
    const layoutProps = getLayoutProps(pathname)

    return (
        <FirebaseProvider>
            <MuiThemeProvider theme={theme}>
                <CurrentUserProvider>
                    <Layout {...layoutProps}>
                        <Component {...pageProps} />
                    </Layout>
                </CurrentUserProvider>
            </MuiThemeProvider>
        </FirebaseProvider>
    )
}

export default wrapper.withRedux(WrappedApp)
