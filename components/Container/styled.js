import styled from 'styled-components'
import { device } from '../../constants'

export const TextContainer = styled.div`
    height: 85vh;
    width: 90%;
    outline: solid #000 1px;
    background-color: rgba(244, 244, 244, 0.5);
    overflow: auto;
    @media ${device.tablet} {
        width: 70%;
    }
`
