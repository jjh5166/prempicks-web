const guestReducer = (state = false, action) => {
  switch (action.type) {
    case 'GUEST_LOGIN':
      return true;
    case 'GUEST_LOGOUT':
      return false;
    default:
      return state;
  }
};

export default guestReducer;