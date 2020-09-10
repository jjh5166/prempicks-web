import { teamsMap } from '../../../constants';

import {
  MyPicksScheduleContainer, MatchdayContainer,
  MatchdayScroll, MatchRow, MatchSingle, MatchGrid,
  HomeSpan, AwaySpan, HomeImage, AwayImage, ScoreSpan
} from './styled';

const MyPicksSchedule = ({ schedule }) => {
  return (
    <MyPicksScheduleContainer>
      {
        schedule &&
        [...Array(38)].map((_, i) => {
          return (
            <ScheduleMatchday matches={schedule[i + 1]} />
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
          {matches.slice(0, 5).map(match => {
            return (
              <Match match={match} />
            );
          })}
        </MatchRow>
        <MatchRow>
          {matches.slice(5, 10).map(match => {
            return (
              <Match match={match} />
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