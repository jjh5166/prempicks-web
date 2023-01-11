import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import GuestTeam from '../../components/UserForm/GuestTeam'

export default function GuestWelcomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: 'GUEST_LOGIN' })
    }, [])
    return <GuestTeam />
}
