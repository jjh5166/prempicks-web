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

const calculateStreak = (picks, scores) => {
    let currentStreak = 0
    let maxStreak = 0

    // Go through picks in chronological order
    Array.from(picks)
        .reverse()
        .forEach(pick => {
            const score = parseFloat(scores[pick.matchday][pick.team_id])

            if (score > 1) {
                // Win
                currentStreak++
                maxStreak = Math.max(maxStreak, currentStreak)
            } else {
                // Loss or Draw
                currentStreak = 0
            }
        })

    return maxStreak
}

const StandingsTable = ({ standingsData }) => {
    const initTable =
        standingsData?.standings[0]?.picks[0]?.matchday > 19 ? 1 : 0
    const [whichTable, switchTable] = useState(initTable)
    const totals = []
    const firstColumn = useRef(null)
    const [secondColumnLeft, setSecondColumn] = useState(null)
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: 'ascending',
    })

    const requestSort = key => {
        let direction = 'ascending'
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    const setStickyColumn = () => {
        setSecondColumn(
            window
                .getComputedStyle(firstColumn.current, null)
                .getPropertyValue('width')
        )
    }
    standingsData.standings.forEach(team => {
        let teamObj = {
            name: team.name,
            firstHalf: 0,
            secondHalf: 0,
            season: 0,
            streak: calculateStreak(team.picks, standingsData.scores),
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
    const sortedTotals = [...totals]
    if (sortConfig.key) {
        sortedTotals.sort((a, b) => {
            // Special handling for points based on which table is showing
            if (sortConfig.key === 'points') {
                const getValue = obj => {
                    if (whichTable === 0) return obj.firstHalf
                    if (whichTable === 2) return obj.secondHalf
                    return obj.season
                }
                const aValue = getValue(a)
                const bValue = getValue(b)
                return sortConfig.direction === 'ascending'
                    ? aValue - bValue
                    : bValue - aValue
            }

            // Handle other columns
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1
            }
            return 0
        })
    } else {
        if (whichTable === 0) {
            sortedTotals.sort((a, b) => b.firstHalf - a.firstHalf)
        } else if (whichTable === 2) {
            sortedTotals.sort((a, b) => b.secondHalf - a.secondHalf)
        } else {
            sortedTotals.sort((a, b) => b.season - a.season)
        }
    }

    useEffect(() => {
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
                            <StickyHeaderCell
                                onClick={() => requestSort('name')}
                            >
                                <span>Team</span>
                                {sortConfig.key === 'name' && (
                                    <span style={{ marginLeft: '4px' }}>
                                        {sortConfig.direction === 'ascending'
                                            ? '↑'
                                            : '↓'}
                                    </span>
                                )}
                            </StickyHeaderCell>
                            <StickyHeaderCell
                                onClick={() => requestSort('points')}
                            >
                                <span>Points</span>
                                {sortConfig.key === 'points' && (
                                    <span style={{ marginLeft: '4px' }}>
                                        {sortConfig.direction === 'ascending'
                                            ? '↑'
                                            : '↓'}
                                    </span>
                                )}
                            </StickyHeaderCell>
                            <TableCell
                                align="center"
                                onClick={() => requestSort('streak')}
                            >
                                <span>Streak</span>
                                {sortConfig.key === 'streak' && (
                                    <span style={{ marginLeft: '4px' }}>
                                        {sortConfig.direction === 'ascending'
                                            ? '↑'
                                            : '↓'}
                                    </span>
                                )}
                            </TableCell>
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
                        {sortedTotals.map((row, i) => (
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
                                <TableCell align="center">
                                    {row.streak}
                                </TableCell>
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
