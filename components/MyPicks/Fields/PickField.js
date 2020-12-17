import { useContext } from 'react';
import { Field } from 'formik';

import { teamChoices } from '../../../constants';
import { SelectWithHighlight } from './styled';
import { DisabledTeamsContext, NewSelectedTeamsContext } from '../Context';
import { checkArrayDupes } from '../../../utils/checkArrayDupes';
const teams = ["", ...teamChoices]; //allow for blank selection

const PickField = ({ name, disabled }) => {
  const disabledTeams = useContext(DisabledTeamsContext) // use to disable selection for teams taken in past matchdays
  const newlySelectedTeams = useContext(NewSelectedTeamsContext) // use to check for teams selected more than once
  return (
    <Field
      name={name}
      type="select"
    >
      {  ({ field }) =>
        <SelectWithHighlight
          {...field}
          disabled={disabled}
          isError={checkArrayDupes(newlySelectedTeams, field.value)}
        >
          {teams.map(t => {
            return <option key={t} value={t} disabled={disabledTeams.includes(t)}>{t}</option>
          })}
        </SelectWithHighlight>}
    </Field>
  );
};

export default PickField;