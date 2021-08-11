import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import useAuthUser from 'redux/hooks/useAuthUser'
import { serverUrl } from 'constants/index'
import Layout from 'components/Layout'
import { UserMyPicks } from 'components/MyPicks'
import { setErrorAlert } from 'redux/actions/alert'

const MyPicksPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [picks, setPicks] = useState(null)
  const [scheduleData, setScheduleData] = useState(null)
  const authUser = useAuthUser()
  useEffect(() => {
    if (!authUser) {
      Router.push('/user/login')
    }
    const fetchData = async () => {
      let optedIn
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
        .catch(() => setErrorAlert('There was an error. Contact the admin.'))
      if (optedIn) {
        await axios
          .get(
            `${serverUrl}/v1/mypicks`,
            { params: { idToken: authUser.idToken } },
            { headers: { 'Content-Type': 'application/json' } }
          )
          .then((res) => {
            setPicks(res.data.picks)
            setScheduleData({
              currentMatchday: res.data.currentMatchday,
              schedule: res.data.matches,
            })
            setIsLoading(false)
          })
          .catch((err) => console.log(err.response))
      } else {
        Router.push('/user/opt-in')
      }
    }
    if (authUser) {
      fetchData()
    }
  }, [authUser])
  return (
    <Layout title='My Picks'>
      {isLoading ? (
        <Loader type='Bars' color='#00BFFF' height={80} width={80} />
      ) : (
        <UserMyPicks
          initialValues={picks}
          authUser={authUser}
          scheduleData={scheduleData}
        />
      )}
    </Layout>
  )
}
export default MyPicksPage
