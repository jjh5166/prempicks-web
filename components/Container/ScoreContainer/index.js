import { ScoreFlexContainer } from './styled';

export const ScoreContainer = ({ home, away, isOver }) => {
  return (
    <ScoreFlexContainer isOver={isOver}>
      <div><span>{home}</span></div>
      <div>{`:`}</div>
      <div><span>{away}</span></div>
    </ScoreFlexContainer>
  );
};