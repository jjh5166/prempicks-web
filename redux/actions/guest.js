export const GUEST_LOGIN = 'GUEST_LOGIN'
export const SET_TEAM = 'SET_TEAM'
export const UPDATE_PICKS = 'UPDATE_PICKS'
export const CREATE_STANDINGS_DATA = 'CREATE_STANDINGS_DATA'
export const GUEST_PICKS_IN_STANDINGS = 'GUEST_PICKS_IN_STANDINGS'
export const AUTOPICK_GUEST = 'AUTOPICK_GUEST'
export const CHANGE_MATCHDAY = 'CHANGE_MATCHDAY'
export const GUEST_LOGOUT = 'GUEST_LOGOUT'

export const guestLogin = () => {
    return { type: GUEST_LOGIN }
}

export const setTeam = teamName => {
    return {
        type: SET_TEAM,
        team_name: teamName,
    }
}

export const updatePicks = picks => {
    return {
        type: UPDATE_PICKS,
        picks: picks,
    }
}

export const createStandingsData = () => {
    return { type: CREATE_STANDINGS_DATA }
}

export const guestPicksInStandings = () => {
    return { type: GUEST_PICKS_IN_STANDINGS }
}

export const autoPickGuest = matchday => {
    return {
        type: AUTOPICK_GUEST,
        matchday: parseInt(matchday),
    }
}

export const changeMatchday = matchday => {
    return {
        type: CHANGE_MATCHDAY,
        matchday: parseInt(matchday),
    }
}

export const guestLogout = () => {
    return { type: GUEST_LOGOUT }
}
