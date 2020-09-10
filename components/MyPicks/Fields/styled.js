import styled from 'styled-components';

export const MyPicksFormContainer = styled.div`

`
export const FieldsGrid = styled.div`
  display: grid;
  grid-row-start: 1;
  grid-row-end: 20;
`
export const FieldBlock = styled.div`
  position: relative;
  border-bottom: 1px solid #000;
  height: 50px;
  display: flex;
  justify-content: center;
  span{
    position: absolute;
    top: 0;
    left: 0;
  }
`