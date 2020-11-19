import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { teamsMap } from '../../constants';
import { ScoreContainer } from '../Container';
import {
  ScheduleContainer, MatchdayTitle,
  MatchContainer, HomeTeam, AwayTeam
} from './styled';

const MatchdaySchedule = ({ matchday, matches, changeMatchday }) =>
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
      {matches.map(match =>
        <MatchContainer key={match.id}>
          <HomeTeam>
            <span>{teamsMap[match.homeTeam.id]['short']}</span>
            <img src={teamsMap[match.homeTeam.id]['crestURL']} />
          </HomeTeam>
          <ScoreContainer
            home={match.score.fullTime.homeTeam}
            away={match.score.fullTime.awayTeam}
            status={match.status}
          />
          <AwayTeam>
            <img src={teamsMap[match.awayTeam.id]['crestURL']} />
            <span>{teamsMap[match.awayTeam.id]['short']}</span>
          </AwayTeam>
        </MatchContainer>
      )}
    </ScheduleContainer>
  </Fragment>;

export default MatchdaySchedule;