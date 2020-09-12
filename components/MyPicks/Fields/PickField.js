import { Field } from 'formik';

// should come from API
const teams = [
  "", "ARS", "AVL", "BHA", "BUR", "CHE", "CRY", "EVE", "FUL", "LEE", "LEI",
  "LIV", "MCI", "MUN", "NEW", "SHU", "SOU", "TOT", "WBA", "WHU", "WOL"
];

const PickField = ({ name, disabled }) => {

  return (
    <Field
      name={name}
      type="select"
      as="select"
      disabled={disabled}
    >
      {teams.map(t => {
        return <option key={t} value={t}>{t}</option>;
      })}
    </Field>
  );
};

export default PickField;