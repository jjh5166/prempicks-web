import { showScore } from 'utils/footballApi'
import { getTimeFromUtc } from 'utils/time'
import { ScoreFlexContainer, SelfCenteredSpan } from './styled'

export const ScoreContainer = ({
    home,
    away,
    status,
    scoreSize,
    kickOffTime,
}) => {
    const showIt = showScore(status)
    return (
        <>
            {showIt ? (
                <ScoreFlexContainer
                    isOver={status === ('FINISHED' || 'AWARDED')}
                    scoreSize={scoreSize}
                >
                    <div>
                        <span>{home}</span>
                    </div>
                    <div>{':'}</div>
                    <div>
                        <span>{away}</span>
                    </div>
                </ScoreFlexContainer>
            ) : (
                <MatchText status={status} kickOffTime={kickOffTime} />
            )}
        </>
    )
}

const MatchText = ({ status, kickOffTime }) => {
    const isPostponed = status === ('POSTPONED' || 'CANCELED')
    const time = getTimeFromUtc(kickOffTime)
    return (
        <SelfCenteredSpan isPostponed={isPostponed}>
            {isPostponed ? 'PPD' : kickOffTime ? time : 'vs.'}
        </SelfCenteredSpan>
    )
}
