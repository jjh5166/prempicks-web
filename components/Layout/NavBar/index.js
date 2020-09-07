import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGavel, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import LogoutButton from '../../LogoutButton';
import { StyledNavBar, StyledBrand } from './styled';

const NavBar = () => {
  return (
    <StyledNavBar expand="md" className="justify-content-between navbar-dark">
      <Container fluid>
        <StyledBrand href="/" className="d-block text-center order-0 order-md-1">PremPicks</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapseNav w-50 order-1 order-md-0">
          <Nav>
            <Nav.Link href="#" className="nav-link">Standings</Nav.Link>
            <Nav.Link href="/mypicks" className="nav-link">My Picks</Nav.Link>
            <Nav.Link href="#" className="nav-link">EPL Table</Nav.Link>
            <Nav.Link href="#" className="nav-link">
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="collapseNav w-50 order-2">
          <Nav className="ml-auto">
            <Nav.Link href="/rules" className="nav-link">
              <FontAwesomeIcon icon={faGavel} size="2x" />
            </Nav.Link>
            <Nav.Link href="/user/account" className="nav-link">
              <FontAwesomeIcon icon={faUser} size="2x" />
            </Nav.Link>
            <LogoutButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
};

export default NavBar;