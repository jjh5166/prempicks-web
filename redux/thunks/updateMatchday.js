import { guestPicksInStandings, autoPickGuest, changeMatchday } from '../actions/guest';

export function updateMatchday(matchday) {
  return async function updateMatchdayThunk(dispatch, getState) {
    const { standingData } = getState();
    dispatch(autoPickGuest(matchday));
    if (standingData) dispatch(guestPicksInStandings());
    dispatch(changeMatchday(matchday));
  };
}