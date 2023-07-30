import { useEffect } from 'react'
import Router from 'next/router'

import UpdateAccountForm from 'components/UserForm/Update'
import { useCurrentUser } from 'context/currentUser'

const UpdateAccountPage = () => {
    const { idToken, currentUser } = useCurrentUser()

    useEffect(() => {
        if (!idToken || !currentUser) {
            Router.push('/')
        }
    }, [])
    return <UpdateAccountForm initialValues={currentUser} />
}

export default UpdateAccountPage
