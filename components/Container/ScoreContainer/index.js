import { Fragment } from 'react';

import { showScore } from '../../../utils/footballApi';
import { ScoreFlexContainer, SelfCenteredSpan } from './styled';

export const ScoreContainer = ({ home, away, status, scoreSize }) => {
  const showIt = showScore(status);
  return (
    <Fragment>
      {
        showIt[0] ?
          <ScoreFlexContainer isOver={showIt[0] && showIt[1]} scoreSize={scoreSize}>
            <div><span>{home}</span></div>
            <div>{`:`}</div>
            <div><span>{away}</span></div>
          </ScoreFlexContainer>
          :
          <SelfCenteredSpan>{`vs.`}</SelfCenteredSpan>
      }
    </Fragment>
  );
}