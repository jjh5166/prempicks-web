import React, {useContext} from 'react'

import { teamsMap } from '../../../constants';
import { ScheduleContext } from '../index';

import {
  MyPicksScheduleContainer, MatchdayContainer,
  MatchdayScroll, MatchRow, MatchSingle, MatchGrid,
  HomeSpan, AwaySpan, HomeImage, AwayImage, ScoreSpan
} from './styled';

const MyPicksSchedule = () => {
  const schedule = useContext(ScheduleContext);
  return (
    <MyPicksScheduleContainer>
      {
        schedule &&
        [...Array(38)].map((_, i) => {
          return (
            <ScheduleMatchday key={`Matchday${i + 1}`} matches={schedule[i + 1]} />
          );
        })
      }
    </MyPicksScheduleContainer>
  );
};
const ScheduleMatchday = ({ matches }) => {

  return (
    <MatchdayContainer>
      <MatchdayScroll>
        <MatchRow>
          {matches.slice(0, 5).map((match, i) => {
            return (
              <Match key={`match${match.home.id}_${match.away.id + i}`} match={match} />
            );
          })}
        </MatchRow>
        <MatchRow>
          {matches.slice(5, 10).map((match, i) => {
            return (
              <Match key={`match${match.home.id}_${match.away.id + i}`} match={match} />
            );
          })}
        </MatchRow>
      </MatchdayScroll>
    </MatchdayContainer>
  );
};
const Match = ({ match }) => {

  return (
    <MatchSingle>
      <MatchGrid>
        <HomeSpan>{teamsMap[match.home.id].abv}</HomeSpan>
        <HomeImage src={teamsMap[match.home.id].crestURL}/>
        <ScoreSpan>{match.status == "FINISHED" ? `${match.score.homeTeam}:${match.score.awayTeam}` : 'vs'}</ScoreSpan>
        <AwayImage src={teamsMap[match.away.id].crestURL}/>
        <AwaySpan>{teamsMap[match.away.id].abv}</AwaySpan>
      </MatchGrid>
    </MatchSingle>
  );
};
export default MyPicksSchedule;