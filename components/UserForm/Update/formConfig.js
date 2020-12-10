import axios from 'axios';

import { serverUrl } from '../../../constants';
import { setErrorAlert, setSuccessAlert } from '../../../redux/actions/alert';

export const updateFields = [
  {
    name: 'first_name',
    labelName: 'First Name',
    isPassword: false
  },
  {
    name: 'last_name',
    labelName: 'Last Name',
    isPassword: false
  },
  {
    name: 'team_name',
    labelName: 'Team Name',
    isPassword: false
  }
];

export const updateAccountFn = async (firebase, data, dispatch) => {
  await axios.put(`${serverUrl}/v1/user`, {
    user: {
      first_name: data.first_name,
      last_name: data.last_name,
      team_name: data.team_name
    },
    idToken: await firebase.retrieveToken()
  },
    { headers: { 'Content-Type': 'application/json' } })
    .then(() =>
      dispatch(setSuccessAlert('Account Updated'))
    ).catch(() =>
      dispatch(setErrorAlert('There was an error. Try Again.'))
    );
};