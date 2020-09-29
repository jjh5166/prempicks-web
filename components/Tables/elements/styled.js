import styled from 'styled-components';
import {device } from '../../../constants';

export const FormItem = styled.span`
  height: 20px;
  width:20px;
  margin: 0 1px;
  background-color: ${({ result }) =>
  result === "W" && '#2ab250' ||
  result === "L" && '#e23c36' ||
    '#a3a3a3'};
  border-radius: 50%;
  display: flex;
  align-items: center; 
  justify-content: center;
  &:before{
    content: '${({ result }) => result}'
  }
`;
export const FormResults = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
export const TeamCrest = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  @media ${device.tablet}{
    height: 40px;
    width:40px;
  }
`;
export const TeamName = styled.span`
  &:before{
    content: '${({abv}) => abv}'
  }
  @media ${device.tablet}{
    &:before{
      content: '${({ short }) => short}'
    }
  }
`;