import styled from 'styled-components';
import { device } from '../../constants';

export const FormContainer = styled.div`
  position: relative;
  width: 70%;
  text-align: center;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(31,89,47,1) 0%, rgb(41, 161, 111) 35%, rgb(8, 78, 31) 100%);
  padding-bottom: 10px;
  border: 2px groove grey;
  color: rgba(231, 241, 241, 1);
  text-shadow: 1px 1px #00394d;
  overflow-y: scroll;
  margin-bottom: 35%;
  h2{
    font-style: oblique
  }
  @media only screen and (orientation: landscape) {
    width: 56%;
  }
  @media ${device.tablet}{
    width: 350px;
    margin-bottom: 0;
  }
`;