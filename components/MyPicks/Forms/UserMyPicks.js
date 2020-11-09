import axios from 'axios';

import MyPicksFormBase from './base';
import { serverUrl } from '../../../constants';
import { setPickSubmission } from '../../../utils/picks';

const UserMyPicks = ({ authUser, initialValues, scheduleData }) => {
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
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
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