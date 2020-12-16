import { useContext } from 'react';
import { Field } from 'formik';

import { teamChoices } from '../../../constants';

import { DisabledTeamsContext } from '../Context';

const teams = ["", ...teamChoices]; //allow for blank selection

const PickField = ({ name, disabled }) => {
  const disabledTeams = useContext(DisabledTeamsContext);
  // use to disable selection for teams taken in past matchdays
  return (
    <Field
      name={name}
      type="select"
      as="select"
      disabled={disabled}
    >
      {teams.map(t => {
        return <option key={t} value={t} disabled={disabledTeams.includes(t)}>{t}</option>;
      })}
    </Field>
  );
};

export default PickField;