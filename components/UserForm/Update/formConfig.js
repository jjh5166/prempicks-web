import axios from 'axios'

import { serverUrl } from '../../../constants'
import { setErrorAlert, setSuccessAlert } from '../../../redux/actions/alert'

export const updateFields = [
  {
    name: 'first_name',
    labelName: 'First Name',
    isPassword: false,
    disabled: true,
  },
  {
    name: 'last_name',
    labelName: 'Last Name',
    isPassword: false,
    disabled: true,
  },
  { name: 'email', labelName: 'Email', isPassword: false },
  {
    name: 'team_name',
    labelName: 'Team Name',
    isPassword: false,
  },
]

export const updateAccountFn = async (firebase, data, dispatch) => {
  await axios
    .put(
      `${serverUrl}/v1/user`,
      {
        user: {
          team_name: data.team_name,
          email: data.email,
        },
        idToken: await firebase.retrieveToken(),
      },
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then(() => dispatch(setSuccessAlert('Account Updated')))
    .catch(() => dispatch(setErrorAlert('There was an error. Try Again.')))
}
