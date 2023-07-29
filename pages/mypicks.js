import { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'

import useAuthUser from 'redux/hooks/useAuthUser'
import { serverUrl } from 'constants/index'
import { UserMyPicks } from 'components/MyPicks'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { setErrorAlert } from 'redux/actions/alert'

const MyPicksPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [picks, setPicks] = useState(null)
    const [scheduleData, setScheduleData] = useState(null)
    const authUser = useAuthUser()
    useEffect(() => {
        if (!authUser) {
            Router.push('/user/login')
        }
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(
                    `${serverUrl}/v1/mypicks`,
                    { params: { idToken: authUser.idToken } },
                    { headers: { 'Content-Type': 'application/json' } }
                )

                setPicks(response.data.picks)
                setScheduleData({
                    currentMatchday: response.data.currentMatchday,
                    schedule: response.data.matches,
                })
            } catch (error) {
                setErrorAlert('There was an error. Contact the admin.')
                console.log(error.response)
            }
            setIsLoading(false)
        }

        fetchData()
    }, [authUser])
    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <UserMyPicks
                    initialValues={picks}
                    authUser={authUser}
                    scheduleData={scheduleData}
                />
            )}
        </>
    )
}
export default MyPicksPage
