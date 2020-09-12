import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

import { device } from '../../constants';

export const BigTitle = styled.div`
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -50%);
  vertical-align: middle;
  font-style: italic;
  font-size: 7em;
  color: rgb(31, 154, 192);
  text-shadow: 2px 2px #00394d;
  text-align: center;
  @media (orientation: landscape) {
    line-height: 1
  }
  @media ${device.tablet} {
    line-height: 1.5;
  }
`;
export const LandingButton = styled(Button)`
    display: block;
    margin: 0 auto;
    color: #fff;
    width: fit-content;
    border: solid white 1px;
    margin: 5%;
    font-size: 2em;
    padding:  0.375rem 0.75rem;
    border-radius: 0.25rem;
    background-color: transparent;
`;
export const LandingButtonsContainer = styled.div`
  position: absolute;
  top: 74%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
  @media (orientation: landscape) {
    top: 80%
  }
  @media ${device.tablet} {
    top: 74%;
  }
`;