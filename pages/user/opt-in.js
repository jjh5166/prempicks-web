import { useEffect } from 'react'
import Router from 'next/router'

import OptInForm from 'components/UserForm/OptIn'
import useAuthUser from 'redux/hooks/useAuthUser'

const OptInPage = () => {
    const authUser = useAuthUser()
    useEffect(() => {
        if (!authUser) {
            Router.push('/')
        }
    }, [authUser])

    return <OptInForm />
}

export default OptInPage
