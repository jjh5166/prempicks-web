import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useDispatch } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Grow from '@material-ui/core/Grow'

import { clearAlert } from '../../redux/actions/alert'
import { useAlert } from '../../redux/hooks'
import NavBar from './NavBar'
import { PageContainer, ContentContainer } from './styled'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

function GrowTransition(props) {
    return <Grow {...props} />
}

const Layout = ({ children, title = 'PremPicks', hideNav = false }) => {
    const dispatch = useDispatch()
    const { message, severity } = useAlert()
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
        dispatch(clearAlert())
    }
    useEffect(() => {
        setOpen(message ? true : false)
    }, [message])
    return (
        <PageContainer>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {!hideNav && <NavBar />}
            <ContentContainer>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    autoHideDuration={2000}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={GrowTransition}
                >
                    <Alert onClose={handleClose} severity={severity}>
                        {message}
                    </Alert>
                </Snackbar>
                {children}
            </ContentContainer>
        </PageContainer>
    )
}

export default Layout
