import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Router from 'next/router'

import { withFirebase } from '../Firebase';

const LogoutButton = ({ firebase }) => (
  <Nav.Link onClick={
    async () => {
      await firebase.doSignOut();
      await Router.push('/');
      }}>
    Log Out
  </Nav.Link>);

export default withFirebase(LogoutButton);