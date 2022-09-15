import styled from 'styled-components'
import { device } from '../../../constants'

const BtnSlider = styled.span`
    color: #151515;
    background-color: white;
    position: absolute;
    top: 0;
    height: 100%;
    z-index: -1;
    will-change: transform;
    left: 0;
    transition: transform 0.4s ease-out;
`
export const TwoBtnSlider = styled(BtnSlider)`
    transform: ${({ slide }) =>
        slide ? 'translateX(0%)' : 'translateX(100%)'};
`
const xTranslate = {
    0: '0',
    1: '100',
    2: '200',
}
export const ThreeBtnSlider = styled(BtnSlider)`
    transform: ${({ slide }) => `translateX(${xTranslate[slide]}%)`};
`
export const SwitchButtons = styled.div`
    width: 98%;
    text-align: center;
    position: relative;
    margin: 0 auto;
    z-index: 197 !important;
    cursor: pointer;
    transition: 0.3s ease all;
    border: 1px solid white;
    height: 40px;
    font-size: 11px;
    margin-bottom: 1%;
    button {
        width: ${({ buttons }) => (buttons === 2 ? '49%' : '33.33%')};
    }
    @media ${device.tablet} {
        width: 40%;
    }
    ${BtnSlider} {
        width: ${({ buttons }) => (buttons === 2 ? '50%' : '33.33%')};
    }
`

export const SwitchButton = styled.button`
    display: inline-block;
    background: none;
    height: 100%;
    color: ${props => (props.active ? '#000' : '#fff')};
    position: relative;
    border: none;
    transition: 0.3s ease all;
    text-transform: uppercase;
    letter-spacing: 4px;
    padding-bottom: 1px;
    &:hover {
        color: grey;
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`
