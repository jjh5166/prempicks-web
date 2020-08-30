export const initialValues = {
  fname: '',
  lname: '',
  team_name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

export const signupFields = [
  {
    name: 'fname',
    labelName: 'First Name',
    isPassword: false
  },
  {
    name: 'lname',
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

export const SignupFn = (data, setErrors) => {

};