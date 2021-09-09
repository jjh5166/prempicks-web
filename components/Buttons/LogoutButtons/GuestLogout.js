import { useDispatch } from 'react-redux'
import Router from 'next/router'

import { guestLogout } from 'redux/actions/guest'
import LogoutButtonBase from './base'

export default function GuestLogoutButton() {
  const dispatch = useDispatch()
  return (
    <LogoutButtonBase
      logoutFn={async () => {
        await Router.push('/')
        dispatch(guestLogout())
      }}
    />
  )
}
