import React, { useContext } from 'react';

import { teamsMap } from '../../../constants';
import { ScoreContainer } from '../../Container';
import { MyPicksContext } from '../Context';

import {
  MyPicksScheduleContainer, MatchdayContainer,
  MatchdayScroll, MatchRow, MatchSingle, MatchGrid,
  HomeSpan, AwaySpan, HomeImage, AwayImage
} from './styled';

const MyPicksSchedule = () => {
  const { showHalf, scheduleData } = useContext(MyPicksContext);
  const halfIndex = showHalf === 1 ? 1 : 20;
  return (
    <MyPicksScheduleContainer>
      {
        scheduleData &&
        [...Array(19)].map((_, i) =>
          <ScheduleMatchday key={`Matchday${i + halfIndex}`} matches={scheduleData.schedule[i + halfIndex]} />
        )
      }
    </MyPicksScheduleContainer>
  );
};

const ScheduleMatchday = ({ matches }) =>
  <MatchdayContainer>
    <MatchdayScroll>
      <MatchRow>
        {matches.slice(0, 5).map(match =>
          <Match key={`match${match.home.id}_${match.away.id}`} match={match} />
        )}
      </MatchRow>
      <MatchRow>
        {matches.slice(5, 10).map(match =>
          <Match key={`match${match.home.id}_${match.away.id}`} match={match} />
        )}
      </MatchRow>
    </MatchdayScroll>
  </MatchdayContainer>

const Match = ({ match }) =>
  <MatchSingle>
    <MatchGrid>
      <HomeSpan>{teamsMap[match.home.id].abv}</HomeSpan>
      <HomeImage src={teamsMap[match.home.id].crestURL} />
      <ScoreContainer
      home={match.score.homeTeam}
      away={match.score.awayTeam}
      status={match.status}
      scoreSize={'12px'}
      />
      <AwayImage src={teamsMap[match.away.id].crestURL} />
      <AwaySpan>{teamsMap[match.away.id].abv}</AwaySpan>
    </MatchGrid>
  </MatchSingle>

export default React.memo(MyPicksSchedule);