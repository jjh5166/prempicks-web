import { useState, useEffect } from 'react'

import EplTable from 'components/Tables/eplStandings'
import { TwoButtons } from 'components/Buttons'
import { lastYearStandings } from 'constants/index'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { getEplTable } from 'services/prempicks'

export default function EplTablePage() {
    const [isLoading, setIsLoading] = useState(true)
    const [standingsData, setStandingsData] = useState(null)
    const [showHalf, setShowHalf] = useState(1)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const response = await getEplTable()
            setStandingsData(response)
            setIsLoading(false)
        }
        fetchData()
    }, [])
    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <>
                    <TwoButtons
                        startLeft={false}
                        buttonNames={['Last Season', 'This Season']}
                        switchSide={setShowHalf}
                    />
                    <EplTable
                        eplStandings={
                            showHalf === 0 ? lastYearStandings : standingsData
                        }
                        hideGames={showHalf === 0}
                        // showForm={showHalf === 1}
                    />
                </>
            )}
        </>
    )
}
