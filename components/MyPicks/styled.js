import styled from 'styled-components';
import { device } from '../../constants';

export const MyPicksContainer = styled.div`
  height: 60vh;
  width: 98%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 25% 75%;
  outline: solid #000 2px;
  background-color: rgba(244, 244, 244, .5);
  overflow: scroll;
  @media ${device.tablet}{
    grid-template-columns: 13% 87%;
  }
`
export const MpSubmitButton = styled.button`
  position: relative;
  margin: 0 auto;
  background-color: white;
  height: 40px;
  font-size: 20px;
  width: 90%;
  margin-top: 2px;
`
export const MpForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`