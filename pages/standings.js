import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Router from 'next/router'
import axios from 'axios'

// import { setSuccessAlert } from 'redux/actions/alert'
// import { triggerScoring } from '../utils/footballApi'
import {
    serverUrl,
    // footballApiKey,
    // footballApiBaseUrl,
    // teamsMap,
} from '../constants'
import StandingsTable from 'components/Tables/userStandings'
import { TeamListTable } from 'components/Tables/TeamListTable'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { useCurrentUser } from 'context/currentUser'
import { setErrorAlert } from 'redux/actions/alert'

export default function StandingsPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [standings, setStandings] = useState(null)
    // const [scores, setScores] = useState()
    const dispatch = useDispatch()
    const { idToken, currentUser } = useCurrentUser()

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            await axios
                .get(
                    `${serverUrl}/v1/standings`,
                    { params: { idToken: idToken } },
                    { headers: { 'Content-Type': 'application/json' } }
                )
                .then(res => {
                    setStandings(res.data)
                    setIsLoading(false)
                    // setScores(res.data.scores)
                })
                .catch(err => {
                    dispatch(setErrorAlert('There was an error fetching data'))
                    console.log(err.response)
                })
        }

        if (idToken && currentUser) {
            fetchData()
        } else {
            Router.push('/')
        }
    }, [])

    // useEffect(() => {
    //     if (scores) {
    //         /* if there are matches, check whether home team has been scored for the matchday.
    //         if not, init scoring job on the server */
    //         const matchCheck = matchData.map(({ matchday, homeTeam }) => [
    //             teamsMap[homeTeam.id]['abv'],
    //             matchday,
    //         ])
    //         try {
    //             const scoreThis = matchCheck.find(
    //                 check => scores[check[1]][check[0]] === 0
    //             )
    //             if (scoreThis) {
    //                 triggerScoring(scoreThis[1])
    //                 dispatch(setSuccessAlert('Updating Scores...'))
    //             }
    //         } catch {
    //             console.log('Error checking scores')
    //         }
    //     }
    // }, [scores])
    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                standings && (
                    <>
                        {standings?.standings ? (
                            <StandingsTable standingsData={standings} />
                        ) : (
                            <TeamListTable teams={standings.teams} />
                        )}
                    </>
                )
            )}
        </>
    )
}

// export async function getServerSideProps() {
//     const today = new Date().toISOString().slice(0, 10)
//     const yestDate = new Date()
//     yestDate.setDate(yestDate.getDate() - 7)
//     const yesterday = yestDate.toISOString().slice(0, 10)

//     const response = await axios.get(
//         // request matches from yesterday to today
//         `${footballApiBaseUrl}/competitions/2021/matches?dateFrom=${yesterday}&dateTo=${today}&status=FINISHED`,
//         { headers: { 'X-Auth-Token': footballApiKey } }
//     )
//     console.log('server props test', response.data.matches)
//     return {
//         props: {
//             matchData: response.data.matches,
//         },
//     }
// }
