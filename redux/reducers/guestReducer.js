import { createInitialValues } from '../../utils/guest';

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
    case 'GUEST_LOGOUT':
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default guestReducer;