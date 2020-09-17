import { Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { StyledTableContainer, TableSpacer } from './styled';

const StandingsTable = ({ standingsData }) => {
  const totals = {};
  standingsData.standings.forEach((team) => {
    totals[team.name] = {
      firstHalf: 0,
      secondHalf: 0
    };
    team.picks.forEach((pick, i) => {
      if (i < 19) {
        totals[team.name].firstHalf += standingsData.scores[pick.matchday][pick.team_id];
      } else {
        totals[team.name].secondHalf += standingsData.scores[pick.matchday][pick.team_id];
      }
    });
  });
  return (
    <StyledTableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} />
            {[...Array(Object.keys(standingsData.scores))].map((matchday) =>
              <TableCell key={`dayHeader${matchday}`} align="center" colSpan={2}>{matchday}</TableCell>
            )}
            <TableSpacer />
          </TableRow>
        </TableHead>
        <TableBody>
          {standingsData.standings.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell className={`${row.name}_total`} component="th" scope="row" align="center">
                {totals[row.name].firstHalf}
              </TableCell>
              {
                row.picks.map(
                  (pick, i) =>
                    <Fragment key={row.name + i}>
                      <TableCell component="td" scope="row" align="center">
                        {pick.team_id}
                      </TableCell>
                      <TableCell className={`${row.name}${i + 1}`} component="td" scope="row" align="center">
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