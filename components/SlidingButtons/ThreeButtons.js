import { useState } from 'react';
import { SwitchButtons, ThreeBtnSlider, SwitchButton } from './styled';

export const ThreeButtons = ({ start = 0, switchTable, buttonNames }) => {
  const [active, setActive] = useState(start);

  const handleClick = index => e => {
      switchTable(index);
    setActive(index);
  };

  return (
    <SwitchButtons buttons={3}>
      <ThreeBtnSlider slide={active}/>
      {buttonNames.map((name, i) =>
        <SwitchButton
          key={i}
          type="button"
          onClick={handleClick(i)}
          active={active === i}
        >
          {name}
        </SwitchButton>
      )}
    </SwitchButtons>
  );
};