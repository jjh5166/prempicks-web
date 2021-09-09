import styled from 'styled-components'

import { device } from 'constants/index'

export const GuestInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  @media ${device.tablet} {
    position: absolute;
    top: 7px;
    padding: 0 10px;
  }
  @media only screen and (orientation: landscape) and (max-height: 400px) {
    display: none;
  }
`
export const InfoTextCont = styled.div`
  display: none;
  position: absolute;
  z-index: 200;
  background: #0e0c0ce6;
  border-radius: 30px;
  padding: 15px;
  width: 75%;
  overflow: scroll;
  @media only screen and (orientation: landscape) {
    max-height: calc(100vh - 100px);
  }
  @media ${device.tablet} {
    width: 50%;
  }
`
export const HoverInfo = styled.div`
  color: #fff;
  &:hover ${InfoTextCont} {
    display: block;
  }
`
