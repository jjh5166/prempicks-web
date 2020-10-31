import { useContext } from 'react';
import { Field } from 'formik';

import { teamChoices } from '../../../constants';

import { DisabledTeamsContext } from './index';

const teams = ["", ...teamChoices];

const PickField = ({ name, disabled }) => {
  const disabledTeams = useContext(DisabledTeamsContext);
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