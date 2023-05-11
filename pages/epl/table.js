import { useState } from 'react'
import axios from 'axios'

import EplTable from 'components/Tables/eplStandings'
import { TwoButtons } from 'components/Buttons'
import {
    footballApiKey,
    footballApiBaseUrl,
    lastYearStandings,
} from 'constants/index'

const EplTablePage = ({ standingsData }) => {
    const [showHalf, setShowHalf] = useState(1)

    return (
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
                showForm={showHalf === 1}
            />
        </>
    )
}

export async function getServerSideProps() {
    const response = await axios.get(
        `${footballApiBaseUrl}/competitions/2021/standings`,
        {
            headers: { 'X-Auth-Token': footballApiKey },
        }
    )

    return {
        props: {
            standingsData: response.data.standings,
        },
    }
}

export default EplTablePage
