import { useSelector, shallowEqual } from 'react-redux';

const useAuthUser = () => {
  return useSelector(
    (state) => ({
      authUser: state.authUser,
    }),
    shallowEqual
  );
}

export default useAuthUser;