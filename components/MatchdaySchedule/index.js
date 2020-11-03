import { Fragment } from 'react';
import { teamsMap } from '../../constants';

import {
  ScheduleContainer, MatchdayTitle,
  MatchContainer, ScoreContainer, HomeTeam, AwayTeam
} from './styled';

function showScore(status) {
  return status === ('FINISHED' || 'AWARDED' || 'INPLAY' || 'PAUSED');
}
const MatchdaySchedule = ({ matchday, matches }) => {
  return (
    <Fragment>
      <MatchdayTitle>{`Matchday ${matchday}`}</MatchdayTitle>
      <ScheduleContainer>
        {matches.map(match => {
          let thisScore = showScore(match.status) ?
            `${match.score.fullTime.homeTeam} : ${match.score.fullTime.awayTeam}`
            :
            'vs.';
          return (
            <MatchContainer key={match.id}>
              <HomeTeam>
                <span>{teamsMap[match.homeTeam.id]['short']}</span>
                <img src={teamsMap[match.homeTeam.id]['crestURL']} />
              </HomeTeam>
              <ScoreContainer>{thisScore}</ScoreContainer>
              <AwayTeam>
                <img src={teamsMap[match.awayTeam.id]['crestURL']} />
                <span>{teamsMap[match.awayTeam.id]['short']}</span>
              </AwayTeam>
            </MatchContainer>
          );
        }
        )}
      </ScheduleContainer>
    </Fragment>
  );
};
export default MatchdaySchedule;