import Router from 'next/router';

export const initialValues = {
  email: '',
  password: ''
};

export const loginFields = [
  {
    name: 'email',
    labelName: 'Email',
    isPassword: false
  },
  {
    name: 'password',
    labelName: 'Password',
    isPassword: true
  }
];

export const loginFn = async (firebase, data) => {
  await firebase.doSignInWithEmailAndPassword(
    data.email,
    data.password
  )
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  await Router.push('/mypicks')
};