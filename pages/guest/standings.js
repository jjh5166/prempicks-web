import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { updateMatchday, initGuestStandings } from 'redux/thunks'
import { useGuestUser } from 'redux/hooks'
import { pluckPicks } from 'utils/guest'
import StandingsTable from 'components/Tables/userStandings'
import GuestInfo from 'components/GuestInfo'
import { LoadingIndicator } from 'components/LoadingIndicator'

const informationText = `The Standings table displays picks in descending order so the most recent matchday is shown first 
throughout the season. This data has been randomly generated. If you skip ahead your picks will be made automatically.`

export default function GuestStandingsPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [standings, setStandings] = useState(null)
    const dispatch = useDispatch()
    const { standingsData, currentMatchday, picks, team_name } = useGuestUser()
    useEffect(() => {
        setIsLoading(true)
        if (!standingsData) {
            dispatch(initGuestStandings(currentMatchday))
        } else {
            updateMatchday(picks, currentMatchday)
            setStandings({
                scores: standingsData.scores,
                standings: pluckPicks(standingsData.standings, currentMatchday),
                userTeam: team_name,
            })
        }
        setIsLoading(false)
    }, [standingsData, currentMatchday])
    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                standings && (
                    <>
                        <GuestInfo
                            matchday={currentMatchday}
                            infoText={informationText}
                        />
                        <StandingsTable standingsData={standings} />
                    </>
                )
            )}
        </>
    )
}
