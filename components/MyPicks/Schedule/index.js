import React, { useContext } from 'react';

import { teamsMap } from '../../../constants';
import { MyPicksContext } from '../index';

import {
  MyPicksScheduleContainer, MatchdayContainer,
  MatchdayScroll, MatchRow, MatchSingle, MatchGrid,
  HomeSpan, AwaySpan, HomeImage, AwayImage, ScoreSpan
} from './styled';

const MyPicksSchedule = () => {
  const { showHalf, scheduleData } = useContext(MyPicksContext);
  const halfIndex = showHalf === 1 ? 1 : 20;
  return (
    <MyPicksScheduleContainer>
      {
        scheduleData &&
        [...Array(19)].map((_, i) => {
          return (
            <ScheduleMatchday key={`Matchday${i + halfIndex}`} matches={scheduleData.schedule[i + halfIndex]} />
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
        <HomeImage src={teamsMap[match.home.id].crestURL} />
        <ScoreSpan>{match.status == "FINISHED" ? `${match.score.homeTeam}:${match.score.awayTeam}` : 'vs'}</ScoreSpan>
        <AwayImage src={teamsMap[match.away.id].crestURL} />
        <AwaySpan>{teamsMap[match.away.id].abv}</AwaySpan>
      </MatchGrid>
    </MatchSingle>
  );
};
export default MyPicksSchedule;