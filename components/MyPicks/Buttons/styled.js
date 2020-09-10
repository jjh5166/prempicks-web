import styled from 'styled-components';
import { device } from '../../../constants';

export const SwitchButtons = styled.div`
    width: 98%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    will-change: transform;
    z-index: 197 !important;
    cursor: pointer;
    transition: .3s ease all;
    border: 1px solid white;
    height: 40px;
    font-size: 11px;
    margin-bottom: 1%;
    button{
      width: 49%;
    };
    @media ${device.tablet}{
      width: 40%;
    }
`;
export const BtnSlider = styled.span`
  width: 50%;
  color: #151515;
  background-color: white;
  position: absolute;
  top: 0;
  height: 100%;
  z-index: -1;
  transition: .3s ease-out all;
  left: 0;
`;
export const SwitchButton = styled.button`
  display: inline-block;
  background: none;
  height: 100%;
  color: ${props => props.active ? "#000" : "#fff"};
  position: relative;
  border: none;
  transition: .3s ease all;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding-bottom: 1px;
  &:hover{
    color: grey;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`