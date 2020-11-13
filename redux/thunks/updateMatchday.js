export function updateMatchday(matchday) {
  return async function updateMatchdayThunk(dispatch) {
    dispatch({ type: 'AUTOPICK_GUEST', matchday: parseInt(matchday) });
    dispatch({ type: 'GUEST_PICKS_IN_STANDINGS' });
    dispatch({ type: 'CHANGE_MATCHDAY', matchday: parseInt(matchday) });
  };
}