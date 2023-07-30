import { useEffect } from 'react'
import Router from 'next/router'

import LoginForm from 'components/UserForm/Login'
import { useCurrentUser } from 'context/currentUser'

export default function LoginPage() {
    const { idToken, currentUser } = useCurrentUser()
    useEffect(() => {
        if (idToken && currentUser?.live) {
            Router.push('/mypicks')
        }
    }, [])

    return <LoginForm />
}
