import { useState } from 'react';
import { SwitchButtons, BtnSlider, SwitchButton } from './styled';

export const MpButtons = ({ startLeft = true }) => {
  const [isLeft, setSide] = useState(startLeft);

  const handleClick = () => {
    if (isLeft) {
      setSide(!isLeft);
    } else {
      setSide(!isLeft);
    }
  };

  return (
    <SwitchButtons>
      <BtnSlider slide={isLeft} />
      <SwitchButton type="button" onClick={handleClick} active={isLeft}>
        1st Half
      </SwitchButton>
      <SwitchButton type="button" onClick={handleClick} active={!isLeft}>
        2nd Half
      </SwitchButton>
    </SwitchButtons>
  );
};