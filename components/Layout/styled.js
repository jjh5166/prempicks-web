import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: -webkit-fill-available;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url('/blur.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: rgba(81, 81, 159, 0.5);
  background-blend-mode: multiply;
`;
export const ContentContainer = styled.div`
  position: relative;
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`