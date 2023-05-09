import { useState, useEffect } from 'react'
import axios from 'axios'

import { footballApiKey, footballApiBaseUrl } from 'constants/index'
import MatchdaySchedule from 'components/MatchdaySchedule'

const EplSchedulePage = ({ matchData }) => {
    const [currentMatchday, setCurrentMatchday] = useState()

    const changeMatchday = matchday => () => {
        setCurrentMatchday(matchday)
    }

    useEffect(() => {
        setCurrentMatchday(matchData.matches[0]['season']['currentMatchday'])
    }, [])

    return (
        <MatchdaySchedule
            matchday={currentMatchday}
            matches={matchData.matches.filter(
                m => m.matchday == currentMatchday
            )}
            changeMatchday={changeMatchday}
        />
    )
}

export async function getServerSideProps() {
    const response = await axios.get(
        `${footballApiBaseUrl}/competitions/2021/matches`,
        {
            headers: { 'X-Auth-Token': footballApiKey },
        }
    )

    return {
        props: {
            matchData: response.data,
        },
    }
}

export default EplSchedulePage
