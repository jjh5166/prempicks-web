import Router from 'next/router';
import { setErrorAlert, setSuccessAlert } from '../../../redux/actions/alert';

export const initialValues = {
  email: ''
};

export const emailField = [
  {
    name: 'email',
    labelName: 'Email',
    isPassword: false
  }
];

export const resetPasswordFn = async (firebase, data, dispatch) => {
  await firebase.doPasswordReset(data.email)
    .then(() => {
      dispatch(setSuccessAlert("Check your email"))
      Router.push('/user/login')
    })
    .catch(err => dispatch(setErrorAlert(err.message)));
};