import axios from 'axios';
import { useDispatch } from 'react-redux';

import MyPicksFormBase from './base';
import { serverUrl } from '../../../constants';
import { setPickSubmission } from '../../../utils/picks';
import { setSuccessAlert, setErrorAlert } from '../../../redux/actions/alert';

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
        dispatch(setSuccessAlert({ message: 'Picks Updated' }));
      })
      .catch(err => dispatch(setErrorAlert({ message: 'There was an error. Try Again.' })));
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