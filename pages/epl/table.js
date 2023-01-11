import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import EplTable from 'components/Tables/eplStandings'
import { TwoButtons } from 'components/Buttons'
import {
    footballApiKey,
    footballApiBaseUrl,
    lastYearStandings,
} from 'constants/index'

const EplTablePage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [currentStandings, setCurrentStandings] = useState(null)
    const [showHalf, setShowHalf] = useState(1)

    useEffect(() => {
        const fetchCurrentSeason = async () => {
            setIsLoading(true)
            await axios
                .get(`${footballApiBaseUrl}/competitions/2021/standings`, {
                    headers: { 'X-Auth-Token': footballApiKey },
                })
                .then(res => {
                    setCurrentStandings(res.data.standings)
                    setIsLoading(false)
                })
                .catch(err => console.log(err.response))
        }
        fetchCurrentSeason()
    }, [])
    return (
        <>
            {isLoading ? (
                <Loader type="Bars" color="#00BFFF" height={80} width={80} />
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
                                showHalf === 0
                                    ? lastYearStandings
                                    : currentStandings
                            }
                            showForm={showHalf === 1}
                        />
                    </>
                )
            )}
        </>
    )
}

export default EplTablePage
