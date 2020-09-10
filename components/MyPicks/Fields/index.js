import { FieldArray } from 'formik';
import PickField from './PickField';

import { FieldsGrid, FieldBlock } from './styled';

const MyPicksFields = ({ values}) => {
  return (
    <div>
      <FieldArray name="picks">
        <FieldsGrid>
          {
            values.picks ? (
              values.picks.map((pick, index) => {
                return(
                  <FieldBlock key={`pick${index}`}>
                    <span>{pick.matchday}</span>
                    <PickField name={`picks.${index}.team_id`} />
                  </FieldBlock>
                )
              })) : null
          }
        </FieldsGrid>
      </FieldArray>
    </div>
  );
};

export default MyPicksFields;