import { useState, useEffect } from 'react'
import { SwitchButtons, ThreeBtnSlider, SwitchButton } from './styled'

const ThreeButtons = ({ start, switchTable, buttonNames }) => {
    const [active, setActive] = useState(start)

    const handleClick = index => () => {
        switchTable(index)
        setActive(index)
    }
    useEffect(() => {
        setActive(start)
    }, [])
    return (
        <SwitchButtons buttons={3}>
            <ThreeBtnSlider slide={active} />
            {buttonNames.map((name, i) => (
                <SwitchButton
                    key={i}
                    type="button"
                    onClick={handleClick(i)}
                    active={active === i}
                >
                    {name}
                </SwitchButton>
            ))}
        </SwitchButtons>
    )
}

export default ThreeButtons
