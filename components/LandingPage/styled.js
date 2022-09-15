import styled from 'styled-components'

import { device } from '../../constants'

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
        line-height: 1;
    }
    @media ${device.tablet} {
        line-height: 1.5;
    }
`
export const LandingButtonsContainer = styled.div`
    position: absolute;
    top: 74%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    justify-content: center;
    @media (orientation: landscape) {
        top: 80%;
    }
    @media ${device.tablet} {
        top: 74%;
    }
`
