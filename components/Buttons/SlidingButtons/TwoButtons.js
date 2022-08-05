import { useState } from 'react'
import { SwitchButtons, TwoBtnSlider, SwitchButton } from './styled'

const TwoButtons = ({ startLeft = true, switchSide, buttonNames }) => {
    const [isLeft, setSide] = useState(startLeft)
    // sides indexed 0, 1
    const handleClick = () => {
        if (isLeft) {
            setSide(!isLeft)
            switchSide(1)
        } else {
            setSide(!isLeft)
            switchSide(0)
        }
    }

    return (
        <SwitchButtons buttons={2}>
            <TwoBtnSlider slide={isLeft} />
            <SwitchButton type="button" onClick={handleClick} active={isLeft}>
                {buttonNames[0]}
            </SwitchButton>
            <SwitchButton type="button" onClick={handleClick} active={!isLeft}>
                {buttonNames[1]}
            </SwitchButton>
        </SwitchButtons>
    )
}

export default TwoButtons
