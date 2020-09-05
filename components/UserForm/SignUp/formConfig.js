import Router from 'next/router';
import axios from 'axios';
import { serverUrl } from '../../../constants';

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

export const signupFn = async (firebase, data) => {
  let uid;
  await firebase.doCreateUserWithEmailAndPassword(
    data.email,
    data.password
  ).then(res => {
    uid = res.user.uid;
  })
    .catch(err => console.log(err));
  await axios.post(`${serverUrl}/user`, {
    user: {
      uid: uid,
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      team_name: data.team_name
    },
    idToken: await firebase.retrieveToken()
  },
    { headers: { 'Content-Type': 'application/json' }})
    .then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err.response);
    });
  await Router.push('/mypicks')
};