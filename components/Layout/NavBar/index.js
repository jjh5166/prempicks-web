import React from "react";
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGavel, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import LogoutButton from '../../LogoutButton';
import { StyledNavBar, StyledBrand } from './styled';

const NavBarLink = ({ href, children }) => (
  <Link href={href} passHref>
    <Nav.Link>{children}</Nav.Link>
  </Link>
);
const NavBar = () => {
  return (
    <StyledNavBar expand="md" className="justify-content-between navbar-dark">
      <Container fluid>
        <StyledBrand href="/" className="d-block text-center order-0 order-md-1">PremPicks</StyledBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse className="collapseNav w-50 order-1 order-md-0">
          <Nav>
            <NavBarLink href="/standings">Standings</NavBarLink>
            <NavBarLink href="/mypicks">My Picks</NavBarLink>
            <NavBarLink href="#">EPL Table</NavBarLink>
            <NavBarLink href="#">
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
            </NavBarLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="collapseNav w-50 order-2">
          <Nav className="ml-auto">
            <NavBarLink href="/rules">
              <FontAwesomeIcon icon={faGavel} size="2x" />
            </NavBarLink>
            <NavBarLink href="/user/account">
              <FontAwesomeIcon icon={faUser} size="2x" />
            </NavBarLink>
            <LogoutButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavBar>
  );
};

export default NavBar;