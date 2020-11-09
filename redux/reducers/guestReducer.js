import { createInitialValues, fakeStandingsData } from '../../utils/guest';

const initialState = {
  isGuest: false,
  team_name: '',
  picks: null,
  standingsData: null
};

const guestReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GUEST_LOGIN':
      return {
        ...state,
        isGuest: true
      };
    case 'SET_TEAM':
      return {
        ...state,
        team_name: action.team_name,
        picks: createInitialValues()
      };
    case 'UPDATE_PICKS':
      return {
        ...state,
        picks: action.picks
      };
    case 'CREATE_STANDINGS_DATA':
      return {
        ...state,
        standingsData: fakeStandingsData({
          name: state.team_name,
          picks: state.picks
        })
      };
    case 'GUEST_LOGOUT':
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default guestReducer;