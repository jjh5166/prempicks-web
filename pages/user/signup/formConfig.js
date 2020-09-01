import Router from 'next/router';

export const initialValues = {
  first_name: '',
  last_name: '',
  team_name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

export const signupFields = [
  {
    name: 'first_name',
    labelName: 'First Name',
    isPassword: false
  },
  {
    name: 'last_name',
    labelName: 'Last Name',
    isPassword: false
  },
  {
    name: 'team_name',
    labelName: 'Team Name',
    isPassword: false
  },
  {
    name: 'email',
    labelName: 'Email',
    isPassword: false
  },
  {
    name: 'password',
    labelName: 'Password',
    isPassword: true
  },
  {
    name: 'password_confirmation',
    labelName: 'Password',
    isPassword: true
  }
];

export const signupFn = (firebase, data) => {
  firebase.doCreateUserWithEmailAndPassword(
    data.email,
    data.password
  ).then(res => console.log(res))
  .catch(err => console.log(err))
  await Router.push('/mypicks')
};