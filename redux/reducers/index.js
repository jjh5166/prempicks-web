import { combineReducers } from 'redux'

import guest from './guestReducer'
import alert from './alertReducer'

export default combineReducers({
    guest,
    alert,
})
