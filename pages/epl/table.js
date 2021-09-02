import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import { footballApiKey, footballApiBaseUrl } from 'constants/index'
import EplTable from 'components/Tables/eplStandings'
import { TwoButtons } from 'components/Buttons'
import Layout from 'components/Layout'

const EplTablePage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [currentStandings, setCurrentStandings] = useState(null)
  const [lastYearStandings, setLastYearStandings] = useState(null)
  const [showHalf, setShowHalf] = useState(1)
  useEffect(() => {
    const fetchCurrentSeason = async () => {
      setIsLoading(true)
      await axios
        .get(`${footballApiBaseUrl}/competitions/2021/standings`, {
          headers: { 'X-Auth-Token': footballApiKey },
        })
        .then((res) => {
          setCurrentStandings(res.data.standings)
          setIsLoading(false)
        })
        .catch((err) => console.log(err.response))
    }
    const fetchLastSeason = async () => {
      await axios
        .get(
          `${footballApiBaseUrl}/competitions/2021/standings?season=2020`, //query should be a variable
          { headers: { 'X-Auth-Token': footballApiKey } }
        )
        .then((res) => {
          setLastYearStandings(res.data.standings)
        })
        .catch((err) => console.log(err.response))
    }
    if (!currentStandings) fetchCurrentSeason()
    if (currentStandings && !lastYearStandings) fetchLastSeason() //fetch last year after current
  }, [currentStandings])
  return (
    <Layout>
      {isLoading ? (
        <Loader type='Bars' color='#00BFFF' height={80} width={80} />
      ) : (
        currentStandings && (
          <>
            <TwoButtons
              startLeft={false}
              buttonNames={['Last Season', 'This Season']}
              switchSide={setShowHalf}
            />
            <EplTable
              eplStandings={
                showHalf === 0 ? lastYearStandings : currentStandings
              }
              showForm={showHalf === 1}
            />
          </>
        )
      )}
    </Layout>
  )
}

export default EplTablePage
