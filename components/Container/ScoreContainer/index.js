import { Fragment } from 'react';

import { showScore } from '../../../utils/footballApi';
import { ScoreFlexContainer, SelfCenteredSpan } from './styled';

export const ScoreContainer = ({ home, away, status, scoreSize }) => {
  const showIt = showScore(status);
  return (
    <Fragment>
      {
        showIt ?
          <ScoreFlexContainer isOver={status === ('FINISHED' || 'AWARDED')} scoreSize={scoreSize}>
            <div><span>{home}</span></div>
            <div>{':'}</div>
            <div><span>{away}</span></div>
          </ScoreFlexContainer>
          :
          <MatchText status={status} />
      }
    </Fragment>
  );
}

const MatchText = ({status}) => {
  const isPostponed = status === ('POSTPONED' || 'CANCELED');
  return(
    <SelfCenteredSpan isPostponed={isPostponed}>{isPostponed ? 'PPD' : 'vs.'}</SelfCenteredSpan>
  )
}