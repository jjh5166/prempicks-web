import styled from 'styled-components';
import { device } from '../../../constants';

export const MyPicksScheduleContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 1;
  grid-row-end: 20;
  outline: 1px solid #000;
  overflow: scroll;
  display: grid;
  grid-row-start: 1;
  grid-row-end: 20;
`
export const MatchdayContainer = styled.div`
  max-width: none;
  border-bottom: 1px solid black;
  overflow: hidden;
  padding: 0 2%;
  @media ${device.tablet}{
    height: 80px;
  }
`
export const MatchdayScroll = styled.div`
  height: 100%;
  margin-bottom: -50px;
  padding-bottom: 50px;
  overflow-y: hidden;
  overflow-x: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display:none;
  }
`
export const MatchRow = styled.div`
  white-space: nowrap;
  height: 25px;
  @media ${device.tablet}{
    height: 40px;
  }
`
export const MatchSingle = styled.div`
  width: 48%;
  text-align: left;
  display: inline-block;
  position: relative;
  margin: 0 1%;
  height: 100%;
  scroll-snap-align: start;
  @media only screen and (min-width: 640px) and (max-width: 812px) and (orientation: landscape) {
    width: 32%;
  }
  @media ${device.tablet}{
    width: 17.5%;
    text-align: center;
    margin: 0 1%;
  }
`
export const MatchGrid = styled.div`
  height: 100%;
  width:100%;
  display: inline-grid;
  grid-template-columns: 25% 15% 20% 15% 25%;
  img{
    height:18px;
    width:18px;
    align-self: center;
    justify-self: center;
  }
  @media only screen and (min-width: 640px) and (max-width: 812px) and (orientation: landscape) {
    grid-template-columns: 22% 17% 22% 17% 22%;
  }
`
const teamSpan = styled.span`
  align-self: center;
  font-size: 16px;
`
export const HomeSpan = styled(teamSpan)`
  grid-column-start: 1;
`
export const AwaySpan = styled(teamSpan)`
  grid-column-start: 5;
`
export const HomeImage = styled.img`
  grid-column-start: 2;
`
export const AwayImage = styled.img`
  grid-column-start: 4;
`