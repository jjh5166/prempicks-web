import { useSelector, shallowEqual } from 'react-redux';

const useAlert = () => {
  return useSelector(
    (state) => (state.alert),
    shallowEqual
  );
}

export default useAlert;