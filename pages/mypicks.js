import { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'

import { serverUrl } from 'constants/index'
import { UserMyPicks } from 'components/MyPicks'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { setErrorAlert } from 'redux/actions/alert'
import { useCurrentUser } from 'context/currentUser'

const MyPicksPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [picks, setPicks] = useState(null)
    const [scheduleData, setScheduleData] = useState(null)
    const { idToken, currentUser } = useCurrentUser()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(
                    `${serverUrl}/v1/mypicks`,
                    { params: { idToken: idToken } },
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
        if (idToken && currentUser) {
            fetchData()
        } else {
            Router.push('/')
        }
    }, [])
    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <UserMyPicks
                    initialValues={picks}
                    scheduleData={scheduleData}
                    setPicks={setPicks}
                />
            )}
        </>
    )
}
export default MyPicksPage
