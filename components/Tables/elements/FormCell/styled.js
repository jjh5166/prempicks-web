import styled from 'styled-components'

export const FormItem = styled.span`
  height: 20px;
  width: 20px;
  margin: 0 1px;
  background-color: ${({ result }) =>
    (result === 'W' && '#2ab250') ||
    (result === 'L' && '#e23c36') ||
    '#a3a3a3'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    content: '${({ result }) => result}';
  }
`
export const FormResults = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`
