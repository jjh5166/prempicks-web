import { useDispatch } from 'react-redux'
import { guestLogout } from '../../../redux/actions/guest'
import LogoutButtonBase from './base'
import Router from 'next/router'

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
