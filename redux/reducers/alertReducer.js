import { SET_ALERT, CLEAR_ALERT } from '../actions/alert'

const alertReducer = (state = { message: null }, action) => {
    switch (action.type) {
        case SET_ALERT:
            return {
                message: action.message,
                severity: action.severity,
            }
        case CLEAR_ALERT:
            return {
                message: null,
            }
        default:
            return state
    }
}

export default alertReducer
