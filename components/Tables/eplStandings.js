import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { FormCell, NoWrapCell, TeamCell, StyledTableContainer } from "./elements";

const EplTable = ({ eplStandings, showForm = false }) => {
  const totalStandings = eplStandings.find(element => element.type === 'TOTAL').table;
  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} />
            {showForm && <TableCell align="center">Form</TableCell>}
            <TableCell align="center">Games</TableCell>
            <TableCell align="center">Goals</TableCell>
            <TableCell align="center">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {totalStandings.map(team =>
            <TableRow key={team.team.name}>
              <TableCell>{team.position}</TableCell>
              <TeamCell team={team.team.id} />
              {showForm && <FormCell form = {team.form}/>}
              <TableCell align="center">{team.playedGames}</TableCell>
              <NoWrapCell align="center">{`${team.goalsFor} : ${team.goalsAgainst}`}</NoWrapCell>
              <TableCell align="center">{team.points}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};
export default EplTable;