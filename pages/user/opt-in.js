import { useEffect } from 'react'
import Router from 'next/router'

import Layout from 'components/Layout'
import OptInForm from 'components/UserForm/OptIn'
import useAuthUser from 'redux/hooks/useAuthUser'

const OptInPage = () => {
    const authUser = useAuthUser()
    useEffect(() => {
        if (!authUser) {
            Router.push('/')
        }
    }, [authUser])

    return (
        <Layout title="Opt In" hideNav={true}>
            <OptInForm />
        </Layout>
    )
}

export default OptInPage
