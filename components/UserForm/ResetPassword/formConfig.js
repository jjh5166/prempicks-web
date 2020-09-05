import Router from 'next/router';

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

export const resetPasswordFn = async (firebase, data) => {
  await firebase.doPasswordReset(data.email)
    .then(() => {
      console.log("Check your email");
    })
    .catch(err => console.log(err));
  await Router.push('/user/login')
};