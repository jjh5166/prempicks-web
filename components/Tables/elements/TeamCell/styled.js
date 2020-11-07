import styled from 'styled-components';
import { device } from '../../../../constants';

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
    content: '${({ abv }) => abv}'
  }
  @media ${device.tablet}{
    &:before{
      content: '${({ short }) => short}'
    }
  }
`;