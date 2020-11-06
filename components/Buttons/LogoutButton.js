import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { withFirebase } from '../Firebase'

function LogoutButton({ firebase }) {
  return <Nav.Link onClick={
    async () => {
      await firebase.doSignOut()
      await Router.push('/')
    }}>
    <FontAwesomeIcon icon={faSignOutAlt} size="2x"/>
  </Nav.Link>
}

export default withFirebase(LogoutButton)