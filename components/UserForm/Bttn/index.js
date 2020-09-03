import React from "react";
import { Button } from '@material-ui/core';

function colorButton({type}) {
  switch (type) {
    case 'Sign Up':
      return '#8943b8';
    case 'Login':
      return '#0f8bb8';
    default:
      return '#0f8bb8';
  }
}

const Bttn = ({ text, ...props }) => {
  const buttonStyle = {
    color: '#fff',
    backgroundColor: colorButton(text)
  };
  const { disabled } = props;
  return (
    <Button
      type="submit"
      disabled={disabled}
      style={buttonStyle}
    >
      {text}
    </Button>
  );
};

export default Bttn;