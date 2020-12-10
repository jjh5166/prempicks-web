export const SET_ALERT = 'SET_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

export const setAlert = ({ message, severity }) => {
  return {
    type: SET_ALERT,
    message: message,
    severity: severity
  }
}
export const setErrorAlert = (message) => {
  return {
    type: SET_ALERT,
    message: message,
    severity: 'error'
  }
}
export const setSuccessAlert = (message) => {
  return {
    type: SET_ALERT,
    message: message,
    severity: 'success'
  }
}
export const clearAlert = () => {
  return {
    type: CLEAR_ALERT
  }
}
