import styled from 'styled-components';
import { device } from '../../constants';

export const MatchContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 43% 14% 43%;
`
export const ScheduleContainer = styled.div`
  height: 60vh;
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
  outline: solid #000 2px;
  background-color: rgba(244, 244, 244, .5);
  overflow: scroll;
  @media (min-width: 580px) and (orientation: landscape) {
    flex-direction: row;
    ${MatchContainer}{
      width: 50%;
      font-size: .9em;
    }
  }
  @media ${device.tablet}{
    flex-direction: column;
    width: 50%;
    ${MatchContainer}{
      width: 100%;
      font-size: 1em;
    }
  }
`
export const MatchdayTitle = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  font-style: italic;
  display: flex;
  align-items: center;
  svg{
    cursor: pointer;
  }
  span{
    padding: 13px;
  }
`

export const ScoreContainer =styled.span`
  justify-self: center;
`
const ScheduleTeam = styled.div`
  img{
    height:22px;
    width:22px;
    place-self: center;
  }
  span{
    white-space: nowrap;
    padding: 7px;
  }
`
export const HomeTeam = styled(ScheduleTeam)`
  text-align: right;
`
export const AwayTeam = styled(ScheduleTeam)`
  text-align: left;
`