import Router from 'next/router'

import { withFirebase } from 'components/Firebase'
import LogoutButtonBase from './base'

function UserLogoutButton({ firebase }) {
  return (
    <LogoutButtonBase
      logoutFn={async () => {
        await firebase.doSignOut()
        await Router.push('/')
      }}
    />
  )
}

export default withFirebase(UserLogoutButton)
