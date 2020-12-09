export const SET_ALERT = 'SET_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

export const setAlert = ({ message, severity }) => {
  return {
    type: SET_ALERT,
    message: message,
    severity: severity
  }
}

export const clearAlert = () => {
  return{
    type: CLEAR_ALERT
  }
}
