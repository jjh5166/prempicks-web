import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

function LogoutButtonBase({ logoutFn }) {
    return (
        <Nav.Link onClick={logoutFn}>
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
        </Nav.Link>
    )
}

export default LogoutButtonBase
