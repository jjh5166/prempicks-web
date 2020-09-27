import { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { StyledTableContainer, TableSpacer } from './styled';

const StandingsTable = ({ standingsData }) => {
  const totals = [];
  standingsData.standings.forEach((team) => {
    let teamObj = {
      name: team.name,
      firstHalf: 0,
      secondHalf: 0,
      picks: team.picks
    };
    team.picks.forEach((pick, i) => {
      if (i < 19) {
        teamObj.firstHalf += standingsData.scores[pick.matchday][pick.team_id];
      } else {
        teamObj.secondHalf += standingsData.scores[pick.matchday][pick.team_id];
      }
    });
    totals.push(teamObj);
  });
  totals.sort((a, b) => b.firstHalf - a.firstHalf);
  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} />
            {Object.keys(standingsData.scores).reverse().map((matchday) =>
              <TableCell key={`dayHeader${matchday}`} align="center" colSpan={2}>{matchday}</TableCell>
            )}
            <TableSpacer />
          </TableRow>
        </TableHead>
        <TableBody>
          {totals.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.firstHalf}
              </TableCell>
              {
                row.picks.map(
                  (pick, i) =>
                    <Fragment key={row.name + i}>
                      <TableCell component="td" scope="row" align="center">
                        {pick.team_id}
                      </TableCell>
                      <TableCell component="td" scope="row" align="center">
                        {standingsData.scores[pick.matchday][pick.team_id]}
                      </TableCell>
                    </Fragment>
                )
              }
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default StandingsTable;