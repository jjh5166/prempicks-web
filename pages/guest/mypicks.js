import { useEffect, useState } from 'react'
import axios from 'axios'

import { useGuestUser } from '../../redux/hooks'
import { parseScheduleMyPicks } from '../../utils/guest'
import { footballApiBaseUrl, footballApiKey } from '../../constants'
import { GuestMyPicks } from '../../components/MyPicks'
import GuestInfo from '../../components/GuestInfo'
import { LoadingIndicator } from 'components/LoadingIndicator'

const informationText = `This is the My Picks page where users make their selections. Season data is fetched from
an external API and fields are locked after the matchday has started. In guest mode, you interact with the Redux 
store instead of the app server. Control where you are in the season by using the dropdown to the right.`
const GuestMyPicksPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { picks, currentMatchday } = useGuestUser()
    const [scheduleData, setScheduleData] = useState(null)
    const mdValue = currentMatchday === 0 ? 1 : currentMatchday
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            await axios
                .get(`${footballApiBaseUrl}/competitions/2021/matches`, {
                    headers: { 'X-Auth-Token': footballApiKey },
                })
                .then(res => {
                    setScheduleData({
                        currentMatchday: currentMatchday,
                        schedule: parseScheduleMyPicks(
                            res.data.matches,
                            currentMatchday
                        ),
                    })
                    setIsLoading(false)
                })
                .catch(err => console.log(err.response))
        }
        fetchData()
    }, [currentMatchday])
    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <>
                    <GuestInfo matchday={mdValue} infoText={informationText} />
                    <GuestMyPicks
                        initialValues={picks}
                        scheduleData={scheduleData}
                    />
                </>
            )}
        </>
    )
}
export default GuestMyPicksPage
