import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'

import OptInForm from 'components/UserForm/OptIn'
import { useCurrentUser } from 'context/currentUser'
import { setSuccessAlert } from 'redux/actions/alert'

const OptInPage = () => {
    const dispatch = useDispatch()
    const { idToken, currentUser } = useCurrentUser()

    useEffect(() => {
        if (idToken && currentUser) {
            if (currentUser?.live) {
                dispatch(
                    setSuccessAlert("You've already opted in this season!")
                )
                Router.push('/mypicks')
            }
        } else {
            Router.push('/')
        }
    }, [])

    return <OptInForm />
}

export default OptInPage
