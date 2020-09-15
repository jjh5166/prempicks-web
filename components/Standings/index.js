import { Fragment }  from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { StyledTableContainer, TableSpacer } from './styled';

const StandingsTable = ({standingsData}) => {
  return(
    <StyledTableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2}></TableCell>
            {
              [...Array(standingsData.currentMatchday)].map((_, i) => {
                return(
                  <TableCell key={`dayHeader${i}`} align="center" colSpan={2}>{i+1}</TableCell>
                )
            }
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
                {0}
              </TableCell>
              {
                row.picks.map(
                  (pick, i) => {
                    return(
                      <Fragment key={row.name + i}>
                        <TableCell component="td" scope="row" align="center">
                          {pick.team_id}
                        </TableCell>
                        <TableCell className={`${row.name}${i+1}`} component="td" scope="row" align="center">
                          {standingsData.scores[pick.matchday][pick.team_id]}
                        </TableCell>
                      </Fragment>
                    )
                  }
                )
              }
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
};

export default StandingsTable;