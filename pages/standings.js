import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import { triggerScoring } from '../utils/footballApi'
import {
  serverUrl,
  footballApiKey,
  footballApiBaseUrl,
  teamsMap,
} from '../constants'
import useAuthUser from '../redux/hooks/useAuthUser'
import Layout from '../components/Layout'
import StandingsTable from '../components/Tables/userStandings'
import TeamListTable from 'components/Tables/teamLlistTable'

export default function StandingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [standings, setStandings] = useState(null)
  const authUser = useAuthUser()
  const today = new Date().toISOString().slice(0, 10)
  const yestDate = new Date()
  yestDate.setDate(yestDate.getDate() - 1)
  const yesterday = yestDate.toISOString().slice(0, 10)
  useEffect(() => {
    if (!authUser) {
      Router.push('/user/login')
    }
    const fetchData = async () => {
      setIsLoading(true)
      let scores
      await axios
        .get(
          `${serverUrl}/v1/standings`,
          { params: { idToken: authUser.idToken } },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          setStandings(res.data)
          setIsLoading(false)
          scores = res.data.scores
        })
        .catch((err) => console.log(err.response))
      await axios
        .get(
          // request matches from yesterday to today
          `${footballApiBaseUrl}/competitions/2021/matches?dateFrom=${yesterday}&dateTo=${today}&status=FINISHED`,
          { headers: { 'X-Auth-Token': footballApiKey } }
        )
        .then((res) => {
          if (res.data.matches) {
            /* if there are matches, check whether home team has been scored for the matchday.
            if not, init scoring job on the server */
            const matchCheck = res.data.matches.map(
              ({ matchday, homeTeam }) => [
                teamsMap[homeTeam.id]['abv'],
                matchday,
              ]
            )
            const scoreThis = matchCheck.find(
              (check) => scores[check[1]][check[0]] === 0
            )
            scoreThis && triggerScoring(scoreThis[1])
          }
        })
        .catch((err) => console.log(err))
    }
    if (authUser) {
      fetchData()
    }
  }, [authUser])
  return (
    <Layout title='Standings'>
      {isLoading ? (
        <Loader type='Bars' color='#00BFFF' height={80} width={80} />
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
    </Layout>
  )
}
