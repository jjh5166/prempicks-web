import Tooltip from '@material-ui/core/Tooltip'

import { TextContainer } from 'components/Container'
import RulesTable from './RulesTable'
import { RulesSection } from './styled'

export default function Rules() {
    const topSix = 'MCI, ARS, LIV, AVL, TOT, CHE'
    const newlyPromoted = 'LEI, IPS, SOU'
    return (
        <TextContainer>
            <RulesSection>
                <h4>{`How To Play`}</h4>
                <p>
                    {`Every week, you pick a team to win. Points are received or
                    deducted based on the result. The season is divided into two
                    halves, you cannot pick the same team twice in a half. There
                    are 19 matches in each half of the season, meaning one team
                    goes unpicked each half. The Top 3 in each half and total
                    season get a pay out. There is also a payout for longest win
                    streak.`}
                </p>
            </RulesSection>
            <RulesSection>
                <h4>{`Scoring`}</h4>
                <div>
                    <RulesTable />
                    <ul>
                        <li>
                            {`Away Win:  If the team you pick wins away from home, you will be awarded an additional half point.`}
                        </li>
                        <li>
                            {`Goal Difference Factor:  If the team you pick wins by
                            3 or more goals, you receive a bonus point. If the
                            team you pick loses by 3 or more goals, you are
                            penalized an additional point.`}
                        </li>
                        <li>
                            {`Top 6 Loss: Any time a `}
                            <Tooltip title={topSix}>
                                <span>
                                    <strong>{`top 6 team`}</strong>
                                </span>
                            </Tooltip>
                            {` from last season is picked and they lose, there is
                            an additional point deduction.`}
                        </li>
                        <li>
                            {`Beat a Top Six: Any time the team you select beats a `}
                            <Tooltip title={topSix}>
                                <span>
                                    <strong>{`top 6 team`}</strong>
                                </span>
                            </Tooltip>
                            {` from last season you will receive a bonus point`}
                        </li>
                        <li>
                            {`Newly Promoted Win: If you pick any of the `}
                            <Tooltip title={newlyPromoted}>
                                <span>
                                    <strong>{`newly promoted teams`}</strong>
                                </span>
                            </Tooltip>
                            {` and they win, you will receive a bonus point.`}
                        </li>
                    </ul>
                </div>
            </RulesSection>
            <RulesSection>
                <h4>{`Picking`}</h4>
                <p>
                    {`Picks must be in by kick off of the first match of the
                    matchday, otherwise the selection will be auto-picked.
                    Reminders are sent by email 24 hours before any deadline to
                    those who haven't picked. Autopick selects the team that
                    finished highest in the last years standings that is still
                    available. Any matches postponed still count for that same
                    matchday and points will be tallied once the match is
                    completed.`}
                </p>
            </RulesSection>
            <RulesSection>
                <h4>{`Tie Breakers`}</h4>
                <p>
                    {`In the event that there is a tie in the standings for either half of the season, higher finish with be determined by:`}
                </p>
                <ol>
                    <li>
                        {`Most points from `}
                        <Tooltip title={newlyPromoted}>
                            <span>
                                <strong>{`newly promoted teams`}</strong>
                            </span>
                        </Tooltip>
                    </li>
                    <li>
                        {`Most points against a `}
                        <Tooltip title={topSix}>
                            <span>
                                <strong>{`top 6 from last season`}</strong>
                            </span>
                        </Tooltip>
                    </li>
                </ol>
            </RulesSection>
        </TextContainer>
    )
}
