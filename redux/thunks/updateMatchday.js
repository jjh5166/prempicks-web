import { guestPicksInStandings, autoPickGuest, changeMatchday } from '../actions/guest';

export function updateMatchday(matchday) {
  return async function updateMatchdayThunk(dispatch, getState) {
    const { guest } = getState();
    if (guest.currentMatchday < matchday) dispatch(autoPickGuest(matchday));
    if (guest.standingsData) dispatch(guestPicksInStandings());
    dispatch(changeMatchday(matchday));
  };
}