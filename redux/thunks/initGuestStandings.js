export function initGuestStandings(matchday) {
  return async function updateMatchdayThunk(dispatch) {
    if(matchday === 0){
      dispatch({ type: 'CHANGE_MATCHDAY', matchday: 1 });
      dispatch({ type: 'AUTOPICK_GUEST', matchday: 1 });
    }
    dispatch({ type: 'CREATE_STANDINGS_DATA' });
  };
}