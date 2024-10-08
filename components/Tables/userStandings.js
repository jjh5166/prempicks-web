import { useEffect, useRef, useState, Fragment } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { ThreeButtons } from 'components/Buttons'
import {
    StyledTableContainer,
    TableSpacer,
    StickyTd,
    StickyHeaderCell,
    BoldingSpan,
} from './elements'

const StandingsTable = ({ standingsData }) => {
    const maxMatchday = standingsData?.standings[0]?.picks[0]['matchday'] || 0 // use to conditionally render ThreeButtons
    const initTable = maxMatchday > 19 ? 1 : 0
    const [whichTable, switchTable] = useState(initTable)
    const totals = []
    const firstColumn = useRef(null)
    const [secondColumnLeft, setSecondColumn] = useState(null)
    const setStickyColumn = () => {
        setSecondColumn(
            window
                .getComputedStyle(firstColumn.current, null)
                .getPropertyValue('width')
        )
    }
    const setTableStart = () => {
        switchTable(initTable)
    }
    standingsData.standings.forEach(team => {
        let teamObj = {
            name: team.name,
            firstHalf: 0,
            secondHalf: 0,
            season: 0,
            picks: team.picks,
        }
        team.picks.forEach(pick => {
            const thisScore = parseFloat(
                standingsData.scores[pick.matchday][pick.team_id]
            )
            teamObj.season += thisScore
            if (pick.matchday < 20) {
                teamObj.firstHalf += thisScore
            } else {
                teamObj.secondHalf += thisScore
            }
        })
        totals.push(teamObj)
    })
    if (whichTable === 0) {
        totals.sort((a, b) => b.firstHalf - a.firstHalf)
    } else if (whichTable === 2) {
        totals.sort((a, b) => b.secondHalf - a.secondHalf)
    } else {
        totals.sort((a, b) => b.season - a.season)
    }
    useEffect(() => {
        setTableStart()
        if (firstColumn) setStickyColumn()
    }, [])

    return (
        <>
            {initTable > 0 && (
                <ThreeButtons
                    start={whichTable}
                    buttonNames={['1st Half', 'Season', '2nd Half']}
                    switchTable={switchTable}
                />
            )}
            <StyledTableContainer component={Paper}>
                <Table stickyHeader size="small">
                    <TableHead>
                        <TableRow>
                            <StickyHeaderCell colSpan={2} />
                            {standingsData.standings[0].picks.map(
                                pick =>
                                    !(
                                        (whichTable === 0 &&
                                            pick.matchday > 19) ||
                                        (whichTable === 2 && pick.matchday < 20)
                                    ) && (
                                        <TableCell
                                            key={`dayHeader${pick.matchday}`}
                                            align="center"
                                            colSpan={2}
                                        >
                                            {pick.matchday}
                                        </TableCell>
                                    )
                            )}
                            <TableSpacer />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {totals.map((row, i) => (
                            <TableRow key={row.name} hover={true}>
                                <StickyTd
                                    scope="row"
                                    align="left"
                                    ref={i === 0 ? firstColumn : null}
                                >
                                    <BoldingSpan
                                        isUser={
                                            row.name === standingsData.userTeam
                                        }
                                    >
                                        {row.name}
                                    </BoldingSpan>
                                </StickyTd>
                                <StickyTd
                                    scope="row"
                                    align="center"
                                    stickyleft={secondColumnLeft}
                                >
                                    <BoldingSpan
                                        isUser={
                                            row.name === standingsData.userTeam
                                        }
                                    >
                                        {whichTable === 0
                                            ? row.firstHalf
                                            : whichTable === 1
                                            ? row.season
                                            : row.secondHalf}
                                    </BoldingSpan>
                                </StickyTd>
                                {row.picks.map(
                                    (pick, i) =>
                                        !(
                                            (whichTable === 0 &&
                                                pick.matchday > 19) ||
                                            (whichTable === 2 &&
                                                pick.matchday < 20)
                                        ) && (
                                            <Fragment key={row.name + i}>
                                                <TableCell
                                                    component="td"
                                                    scope="row"
                                                    align="center"
                                                >
                                                    {pick.team_id}
                                                </TableCell>
                                                <TableCell
                                                    component="td"
                                                    scope="row"
                                                    align="center"
                                                >
                                                    {
                                                        standingsData.scores[
                                                            pick.matchday
                                                        ][pick.team_id]
                                                    }
                                                </TableCell>
                                            </Fragment>
                                        )
                                )}
                                <TableCell />
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </>
    )
}

export default StandingsTable
