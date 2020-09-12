import { useContext } from 'react';
import { FieldArray } from 'formik';
import PickField from './PickField';

import { ScheduleContext } from '../index';
import { FieldsGrid, FieldBlock } from './styled';

const MyPicksFields = ({ values}) => {
  const schedule = useContext(ScheduleContext);
  const timeNow = new Date().toISOString()
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
                    <PickField
                    name={`picks.${index}.team_id`}
                      disabled={timeNow > schedule[index + 1][0]['utcDate']}
                    />
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