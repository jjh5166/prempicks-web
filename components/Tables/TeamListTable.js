import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { StyledTableContainer } from './elements'

export const TeamListTable = ({ teams }) => (
    <StyledTableContainer component={Paper}>
        <Table stickyHeader size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Team Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {teams.map((team, i) => (
                    <TableRow key={i} hover={true}>
                        <TableCell>{`${team[0]} ${team[1]}`}</TableCell>
                        <TableCell>{`${team[2]}`}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </StyledTableContainer>
)
