import { useEffect } from 'react'
import Router from 'next/router'

import LoginForm from '../../components/UserForm/Login'
import useAuthUser from '../../redux/hooks/useAuthUser'

const LoginPage = () => {
    const authUser = useAuthUser()
    useEffect(() => {
        if (authUser) {
            Router.push('/mypicks')
        }
    }, [authUser])

    return <LoginForm />
}

export default LoginPage
