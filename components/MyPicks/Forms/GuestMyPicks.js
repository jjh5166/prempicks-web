import MyPicksFormBase from './base';
import { useDispatch } from 'react-redux';

import { setSuccessAlert, setErrorAlert } from '../../../redux/actions/alert';
import { updatePicks } from '../../../redux/actions/guest';

const GuestMyPicks = ({ initialValues, scheduleData }) => {
  const dispatch = useDispatch();
  const submitFn = async (data) => {
    try {
      dispatch(updatePicks(data.picks))
      dispatch(setSuccessAlert({ message: 'Picks Updated' }))
    } catch (err) {
      dispatch(setErrorAlert({ message: 'There was an error. Try Again.' }))
    }
  };
  return (
    <MyPicksFormBase
      initialValues={initialValues}
      scheduleData={scheduleData}
      submitFn={submitFn}
    />
  );
};

export default GuestMyPicks;