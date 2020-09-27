import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { teamsMap } from '../../constants'
import { StyledTableContainer } from './styled';

const EplTable = ({ eplStandings }) => {
  console.log(eplStandings);
  const totalStandings = eplStandings.find(element => element.type === 'TOTAL').table;
  console.log('totalStandings', totalStandings);
  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell align="center">Form</TableCell>
            <TableCell align="center">Games</TableCell>
            <TableCell align="center">Goals</TableCell>
            <TableCell align="center">Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {totalStandings.map(team => 
            <TableRow key={team.team.name}>
              <TableCell>{team.position}</TableCell>
              <TableCell>{teamsMap[team.team.id].name}</TableCell>
              <TableCell>{team.form}</TableCell>
              <TableCell align="center">{team.playedGames}</TableCell>
              <TableCell align="center">{`${team.goalsFor} : ${team.goalsAgainst}`}</TableCell>
              <TableCell align="center">{team.points}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};
export default EplTable;