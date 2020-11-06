import { combineReducers } from "redux";

import authUser from './authUserReducer';
import guest from './guestReducer';

export default combineReducers({
  authUser,
  guest
});