import { UPDATE_AUTH, LOGOUT } from '../actions/authUser'

const authUserReducer = (state = null, action) => {
    switch (action.type) {
        case UPDATE_AUTH:
            return {
                ...state,
                idToken: action.idToken,
            }
        case LOGOUT:
            return null
        default:
            return state
    }
}

export default authUserReducer
