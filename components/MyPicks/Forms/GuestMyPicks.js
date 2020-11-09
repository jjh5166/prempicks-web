import MyPicksFormBase from './base';
import { useDispatch } from 'react-redux';

const GuestMyPicks = ({ initialValues, scheduleData }) => {
  const dispatch = useDispatch();
  const submitFn = async (data) => {
    dispatch({ type: 'UPDATE_PICKS', picks: data.picks });
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