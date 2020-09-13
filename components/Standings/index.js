import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StandingsTable = ({standingsData}) => {
  console.log(standingsData)
  return(
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {
              [...Array(standingsData.currentMatchday)].map((_, i) => {
                return(
                  <TableCell align="right">{i+1}</TableCell>
                )
            }
              )}
          </TableRow>
        </TableHead>
        <TableBody>
          {standingsData.standings.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {
                row.picks.map(
                  pick => {
                    return(
                      <TableCell component="td" scope="row">
                        {pick.team_id}
                      </TableCell>
                    )
                  }
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  )
};

export default StandingsTable;