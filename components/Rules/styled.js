import styled from 'styled-components';

export const RulesContainer = styled.div`
  height: 85vh;
  width: 90%;
  outline: solid #000 1px;
  background-color: rgba(244, 244, 244, .5);
  overflow: auto;
`

export const RulesSection = styled.div`
    margin: 0 4%;
    height: auto;
    margin-bottom: 30px;
    h4{
      text-align: center;
      position: relative;
      font-style: oblique;
      margin: 0;
      margin-bottom: 10px;
    }
    span{
      text-decoration: underline;
    }
`

export const RulesTableEl = styled.table`
  position: relative;
  table-layout: auto;
  background-color: #EDEAEA;
  opacity: .7;
  border: 1px solid white;
  border-collapse: collapse;
  float: left;
  margin-right: 32px;
    tr, th, td{
    border: 1px solid black;
    text-align: center;
  }
`