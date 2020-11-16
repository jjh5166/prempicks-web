export const UPDATE_AUTH = 'UPDATE_AUTH';
export const LOGOUT = 'LOGOUT';

export const updateAuth = (idToken) => {
  return {
    type: UPDATE_AUTH,
    idToken: idToken
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};