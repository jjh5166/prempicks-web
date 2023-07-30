import Router from 'next/router'

import LogoutButtonBase from './base'
import { useFirebase } from 'components/Firebase/context'
import { useCurrentUser } from 'context/currentUser'

function UserLogoutButton() {
    const firebase = useFirebase()
    const { setCurrentUser } = useCurrentUser()
    return (
        <LogoutButtonBase
            logoutFn={async () => {
                setCurrentUser(undefined)
                await firebase.doSignOut()
                await Router.push('/')
            }}
        />
    )
}

export default UserLogoutButton
