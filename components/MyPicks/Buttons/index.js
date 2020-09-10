import { SwitchButtons, BtnSlider, SwitchButton } from './styled';

export const MpButtons = () => {

  return (
    <SwitchButtons>
      <BtnSlider/>
      <SwitchButton active>
        1st Half
      </SwitchButton>
      <SwitchButton>
        2nd Half
      </SwitchButton>
    </SwitchButtons>
  );
}