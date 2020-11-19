import styled from 'styled-components';

export const ScoreFlexContainer = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ isOver }) => isOver ? '#4c4a4a' : '#000'};
  div{
    display: inline-block;
    text-align: center;
    &:first-child, &:last-child{
      flex: 1;
      text-align: center;
    }
    span{
      width: 20px;
    }
    &:first-child{
      span{
        float: right;
      }
    }
    &:last-child{
      span{
        float: left;
      }
    }
  };
`;