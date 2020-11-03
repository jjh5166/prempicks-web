import { Fragment } from 'react';
import { teamsMap } from '../../constants';

import {
  ScheduleContainer, MatchdayTitle,
  MatchContainer, ScoreContainer, HomeTeam, AwayTeam
} from './styled';

const MatchdaySchedule = ({ matchday, matches }) => {
  return (
    <Fragment>
      <MatchdayTitle>{`Matchday ${matchday}`}</MatchdayTitle>
      <ScheduleContainer>
          {matches.map(match => {
            console.log(match);
            return (
              <MatchContainer key={match.id}>
                <HomeTeam>
                  <span>{teamsMap[match.homeTeam.id]['short']}</span>
                  <img src={teamsMap[match.homeTeam.id]['crestURL']} />
                </HomeTeam>
                <ScoreContainer>{"vs."}</ScoreContainer>
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