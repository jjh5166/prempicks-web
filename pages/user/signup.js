// import Router from 'next/router';
// import { useDispatch } from 'react-redux';

import SignUpForm from '../../components/UserForm/SignUp'
// import { setInfoAlert } from '../../redux/actions/alert';

const SignupPage = () => {
    // const dispatch = useDispatch()
    // immediate redirect to prevent sign up
    // useEffect(() => {
    //   Router.push('/');
    //   dispatch(setInfoAlert('Registration is closed as the season has started.'))
    // }, []);
    return <SignUpForm />
}

export default SignupPage
