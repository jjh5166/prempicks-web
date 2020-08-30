import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

export const StyledNavBar = styled(Navbar)`
  background: linear-gradient(90deg, rgba(31,89,47,1) 0%, rgb(41, 161, 111) 35%, rgb(8, 78, 31) 100%);
  border-bottom: 2px ridge rgb(78, 107, 91);
  @media only screen and (min-width: 640px) and (max-width: 812px) and (orientation: landscape) {
    display: none;
  }
`;
export const StyledBrand = styled(Navbar.Brand)`
  font-style: oblique;
  color: rgba(231, 241, 241, 0.808) !important;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
`;