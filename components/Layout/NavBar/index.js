import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

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
            <Nav.Link href="/standings" className="nav-link">Standings</Nav.Link>
            <Nav.Link href="/mypicks" className="nav-link">My Picks</Nav.Link>
            <Nav.Link href="/epl_table" className="nav-link">EPL Table</Nav.Link>
            <Nav.Link href="/schedule" className="nav-link">Schedule</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="collapseNav w-50 order-2">
          <Nav className="ml-auto">
            <Nav.Link href="/rules" className="nav-link">Rules</Nav.Link>
            <Nav.Link href="/account" className="nav-link">Account</Nav.Link>
            <LogoutButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
};

export default NavBar;