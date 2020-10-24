import {useContext} from 'react';
import { Field } from 'formik';

import { DisabledTeamsContext } from './index'
// should come from API
const teams = [
  "", "ARS", "AVL", "BHA", "BUR", "CHE", "CRY", "EVE", "FUL", "LEE", "LEI",
  "LIV", "MCI", "MUN", "NEW", "SHU", "SOU", "TOT", "WBA", "WHU", "WOL"
];

const PickField = ({ name, disabled }) => {
  const disabledTeams = useContext(DisabledTeamsContext)
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