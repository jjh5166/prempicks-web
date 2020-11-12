import { 
  createInitialValues, fakeStandingsData,
  updateStandingsData, replaceGuestInStandings
} from '../../utils/guest';

const initialState = {
  isGuest: false,
  team_name: '',
  picks: null,
  standingsData: null,
  currentMatchday: 1
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
        picks: action.picks,
        standingsData: updateStandingsData(state.standingsData, action.picks)
      };
    case 'CREATE_STANDINGS_DATA':
      return {
        ...state,
        standingsData: fakeStandingsData({
          name: state.team_name,
          picks: state.picks
        })
      };
    case 'GUEST_PICKS_IN_STANDINGS':
      return{
        ...state,
        standingsData: {
          scores: state.standingsData.scores,
          standings: replaceGuestInStandings(state.standingsData.standings, state.picks)
        }
      }
    case 'CHANGE_MATCHDAY':
      return {
        ...state,
        currentMatchday: action.matchday
      }
    case 'GUEST_LOGOUT':
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default guestReducer;