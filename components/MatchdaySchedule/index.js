import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { teamsMap } from '../../constants';

import {
  ScheduleContainer, MatchdayTitle,
  MatchContainer, ScoreContainer, HomeTeam, AwayTeam
} from './styled';

function showScore(status) {
  return status === ('FINISHED' || 'AWARDED' || 'INPLAY' || 'PAUSED');
}
const MatchdaySchedule = ({ matchday, matches, changeMatchday }) => {
  return (
    <Fragment>
      <MatchdayTitle>
        {
          matchday > 1 &&
          <FontAwesomeIcon
            onClick={changeMatchday(matchday - 1)}
            icon={faChevronLeft}
            size={"lg"} />
        }
        <span>{`Matchday ${matchday}`}</span>
        {
          matchday < 38 &&
          <FontAwesomeIcon
            onClick={changeMatchday(matchday + 1)}
            icon={faChevronRight}
            size={"lg"} />
        }
      </MatchdayTitle>
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