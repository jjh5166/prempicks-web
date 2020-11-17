import { guestPicksInStandings, autoPickGuest, changeMatchday } from '../actions/guest';

export function updateMatchday(matchday) {
  return async function updateMatchdayThunk(dispatch) {
    dispatch(autoPickGuest(matchday));
    dispatch(guestPicksInStandings());
    dispatch(changeMatchday(matchday));
  };
}