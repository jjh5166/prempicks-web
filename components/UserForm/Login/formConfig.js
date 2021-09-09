import Router from 'next/router'
import { setErrorAlert, setSuccessAlert } from '../../../redux/actions/alert'

export const initialValues = {
  email: '',
  password: '',
}

export const loginFields = [
  {
    name: 'email',
    labelName: 'Email',
    isPassword: false,
  },
  {
    name: 'password',
    labelName: 'Password',
    isPassword: true,
  },
]

export const loginFn = async (firebase, data, dispatch) => {
  await firebase
    .doSignInWithEmailAndPassword(data.email, data.password)
    .then(() => {
      dispatch(setSuccessAlert('Welcome Back!'))
      Router.push('/mypicks')
    })
    .catch((err) => {
      console.log(err)
      dispatch(setErrorAlert(err.message))
    })
}
