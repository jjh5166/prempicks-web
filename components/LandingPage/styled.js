import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const BigTitle = styled.div`
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  vertical-align: middle;
  font-style: italic;
  font-size: 7em;
  color: rgb(31, 154, 192);
  text-shadow: 2px 2px #00394d;
  text-align: center;
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
  top: 62%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  justify-content: center;
`;