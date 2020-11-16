import MyPicksFormBase from './base';
import { useDispatch } from 'react-redux';
import { updatePicks } from '../../../redux/actions/guest';

const GuestMyPicks = ({ initialValues, scheduleData }) => {
  const dispatch = useDispatch();
  const submitFn = async (data) => {
    dispatch(updatePicks(data.picks));
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