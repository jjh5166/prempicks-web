import { createStandingsData, autoPickGuest, changeMatchday } from '../actions/guest';

export function initGuestStandings(matchday) {
  return async function updateMatchdayThunk(dispatch) {
    if(matchday === 0){
      dispatch(changeMatchday(1));
      dispatch(autoPickGuest(1));
    }
    dispatch(createStandingsData());
  };
}