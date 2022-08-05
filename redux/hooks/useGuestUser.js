import { useSelector } from 'react-redux'

const useGuestUser = () => {
    return useSelector(state => state.guest)
}

export default useGuestUser
