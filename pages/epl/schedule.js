import { useState, useEffect } from 'react'

import MatchdaySchedule from 'components/MatchdaySchedule'
import { getEplSchedule } from 'services/prempicks'
import { LoadingIndicator } from 'components/LoadingIndicator'

export default function EplSchedulePage() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentMatchday, setCurrentMatchday] = useState()
    const [matchData, setMatchData] = useState(null)

    const changeMatchday = matchday => () => {
        setCurrentMatchday(matchday)
    }

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const matchData = await getEplSchedule()
            setMatchData(matchData)
            setCurrentMatchday(
                matchData.matches[0]['season']['currentMatchday']
            )
            setIsLoading(false)
        }
        fetchData()
    }, [])

    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <MatchdaySchedule
                    matchday={currentMatchday}
                    matches={matchData.matches.filter(
                        m => m.matchday == currentMatchday
                    )}
                    changeMatchday={changeMatchday}
                />
            )}
        </>
    )
}
