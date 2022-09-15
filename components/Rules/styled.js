import styled from 'styled-components'
import { device } from '../../constants'

export const RulesSection = styled.div`
    margin: 0 4%;
    height: auto;
    margin-bottom: 30px;
    h4 {
        text-align: center;
        position: relative;
        font-style: oblique;
        margin: 0;
        margin-bottom: 10px;
    }
    span {
        text-decoration: underline;
    }
    @media ${device.tablet} {
        div {
            display: grid;
            grid-template-columns: 40% 60%;
        }
    }
`

export const RulesTableEl = styled.table`
    justify-self: center;
    position: relative;
    table-layout: auto;
    background-color: #edeaea;
    opacity: 0.7;
    border: 1px solid white;
    border-collapse: collapse;
    float: left;
    margin-right: 32px;
    tr,
    th,
    td {
        border: 1px solid black;
        text-align: center;
    }
`
