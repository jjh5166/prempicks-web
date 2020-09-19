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
  let success = false;
  await firebase.doSignInWithEmailAndPassword(
    data.email,
    data.password
  )
    .then(() => {
      success = true;
    })
    .catch(err => console.log(err));
    if(success){
      await Router.push('/mypicks')
    }
};