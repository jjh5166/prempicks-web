import { combineReducers } from "redux";

import authUser from './authUserReducer';
import guest from './guestReducer';
import alert from './alertReducer';

export default combineReducers({
  authUser,
  guest,
  alert
});