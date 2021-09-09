import TableCell from '@material-ui/core/TableCell'

import { teamsMap } from 'constants/index'
import { TeamCrest, TeamName } from './styled'

const style = {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const TeamCell = ({ team }) => (
  <TableCell>
    <div style={style}>
      <TeamCrest src={teamsMap[team].crestURL} />
      <TeamName short={teamsMap[team].short} abv={teamsMap[team].abv} />
    </div>
  </TableCell>
)

export default TeamCell
