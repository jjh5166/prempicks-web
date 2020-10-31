import { useState } from 'react';
import { SwitchButtons, BtnSlider, SwitchButton } from './styled';

export const TwoButtons = ({ startLeft = true, switchSide, buttonNames }) => {
  const [isLeft, setSide] = useState(startLeft);

  const handleClick = () => {
    if (isLeft) {
      switchSide(2);
      setSide(!isLeft);
    } else {
      switchSide(1);
      setSide(!isLeft);
    }
  };

  return (
    <SwitchButtons>
      <BtnSlider slide={isLeft} />
      <SwitchButton type="button" onClick={handleClick} active={isLeft}>
        {buttonNames[0]}
      </SwitchButton>
      <SwitchButton type="button" onClick={handleClick} active={!isLeft}>
        {buttonNames[1]}
      </SwitchButton>
    </SwitchButtons>
  );
};