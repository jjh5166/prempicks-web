import axios from 'axios';
import { useDispatch } from 'react-redux';

import MyPicksFormBase from './base';
import { serverUrl } from '../../../constants';
import { setPickSubmission } from '../../../utils/picks';
import { setAlert } from '../../../redux/actions/alert';

const UserMyPicks = ({ authUser, initialValues, scheduleData }) => {
  const dispatch = useDispatch();
  const userSubmit = async (data) => {
    // only send changed values
    const submitionData = data.picks.filter(x => !initialValues.includes(x));
    await axios.patch(
      `${serverUrl}/v1/mypicks`, {
      "idToken": authUser.idToken,
      "picks": setPickSubmission(submitionData)
    },
      { headers: { 'Content-Type': 'application/json' } }
    )
      .then(res => {
        dispatch(setAlert({message: 'Picks Updated', severity: 'success'}));
      })
      .catch(err => dispatch(setAlert({ message: 'There was an error. Try Again.', severity: 'error' })));
  };
  return (
    <MyPicksFormBase
      initialValues={initialValues}
      scheduleData={scheduleData}
      submitFn={userSubmit}
    />
  );
};

export default UserMyPicks;