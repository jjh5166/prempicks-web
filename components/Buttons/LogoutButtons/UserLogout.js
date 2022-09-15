import Router from 'next/router'

import LogoutButtonBase from './base'
import { useFirebase } from 'components/Firebase/context'

function UserLogoutButton() {
    const firebase = useFirebase()
    return (
        <LogoutButtonBase
            logoutFn={async () => {
                await firebase.doSignOut()
                await Router.push('/')
            }}
        />
    )
}

export default UserLogoutButton
