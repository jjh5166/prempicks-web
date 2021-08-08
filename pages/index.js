import { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Loader from 'react-loader-spinner'

import { serverUrl } from 'constants/index'
import LandingPage from 'components/LandingPage'
import Layout from 'components/Layout'
import { useAuthUser } from 'redux/hooks'

export default function Home() {
  const authUser = useAuthUser()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let optedIn = false
    const fetchData = async () => {
      setIsLoading(true)
      await axios
        .get(
          `${serverUrl}/v1/user`,
          { params: { idToken: authUser.idToken } },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          optedIn = res.data.live
          setIsLoading(false)
        })
        .catch((err) => console.log(err.response))
      if (optedIn) {
        Router.push('/mypicks')
      } else {
        Router.push('/user/opt-in')
      }
    }
    if (authUser) {
      fetchData()
    }
  }, [authUser])

  return (
    <Layout hideNav={true}>
      {isLoading ? (
        <Loader type='Bars' color='#00BFFF' height={80} width={80} />
      ) : (
        <LandingPage />
      )}
    </Layout>
  )
}
