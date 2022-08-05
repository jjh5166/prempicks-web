import { useSelector, shallowEqual } from 'react-redux'

const useAuthUser = () => {
    return useSelector(state => state.authUser, shallowEqual)
}

export default useAuthUser
