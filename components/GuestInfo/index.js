import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import { ChangeMatchday } from '../ChangeMatchday'
import { InfoText } from './InfoText'
import { GuestInfoContainer, HoverInfo } from './styled'

const GuestInfo = ({ matchday, infoText }) => {
  return (
    <GuestInfoContainer>
      <HoverInfo>
        <FontAwesomeIcon icon={faInfoCircle} size='2x' />
        <InfoText infoText={infoText} />
      </HoverInfo>
      {matchday && <ChangeMatchday current={matchday} />}
    </GuestInfoContainer>
  )
}

export default GuestInfo
