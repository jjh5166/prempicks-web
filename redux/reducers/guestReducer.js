import {
  GUEST_LOGIN, SET_TEAM, UPDATE_PICKS,
CREATE_STANDINGS_DATA, GUEST_PICKS_IN_STANDINGS,
AUTOPICK_GUEST, CHANGE_MATCHDAY, GUEST_LOGOUT
} from '../actions/guest';

import {
  createInitialValues, fakeStandingsData,
  updateStandingsData, replaceGuestInStandings,
  autopickGuest
} from '../../utils/guest';

const initialState = {
  isGuest: false,
  team_name: '',
  picks: null,
  standingsData: null,
  currentMatchday: 0
};

const guestReducer = (state = initialState, action) => {
  switch (action.type) {
    case GUEST_LOGIN:
      return {
        ...state,
        isGuest: true
      };
    case SET_TEAM:
      return {
        ...state,
        team_name: action.team_name,
        picks: createInitialValues()
      };
    case UPDATE_PICKS:
      return {
        ...state,
        picks: action.picks,
        standingsData: updateStandingsData(state.standingsData, action.picks)
      };
    case CREATE_STANDINGS_DATA:
      return {
        ...state,
        standingsData: fakeStandingsData({
          name: state.team_name,
          picks: state.picks
        })
      };
    case GUEST_PICKS_IN_STANDINGS:
      return {
        ...state,
        standingsData: {
          scores: state.standingsData.scores,
          standings: replaceGuestInStandings(state.standingsData.standings, state.picks)
        }
      };
    case AUTOPICK_GUEST:
      return {
        ...state,
        picks: autopickGuest(state.picks, action.matchday)
      };
    case CHANGE_MATCHDAY:
      return {
        ...state,
        currentMatchday: action.matchday
      };
    case GUEST_LOGOUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default guestReducer;