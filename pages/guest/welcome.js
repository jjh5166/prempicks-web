import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Layout from 'components/Layout'
import GuestTeam from 'components/UserForm/GuestTeam'

export default function GuestWelcomePage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: 'GUEST_LOGIN' })
  }, [])
  return (
    <Layout hideNav={true}>
      <GuestTeam />
    </Layout>
  )
}
