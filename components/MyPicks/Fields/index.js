import { useContext } from 'react';
import { FieldArray } from 'formik';
import PickField from './PickField';

import { MyPicksContext } from '../index';
import { FieldsGrid, FieldBlock } from './styled';

const MyPicksFields = ({ values }) => {
  const { showHalf, scheduleData } = useContext(MyPicksContext);
  const timeNow = new Date().toISOString();
  const slices = showHalf === 1 ? [0, 19] : [19, 38];
  const indexFactor = showHalf === 1 ? 0 : 19
  return (
    <div>
      <FieldArray name="picks">
        <FieldsGrid>
          {
            values.picks ? (
              values.picks.slice(slices[0], slices[1]).map((pick, index) => {
                const pickIndex = index + indexFactor
                return (
                  <FieldBlock key={`pick${pickIndex}`}>
                    <span>{pick.matchday}</span>
                    <PickField
                      name={`picks.${pickIndex}.team_id`}
                      disabled={timeNow > scheduleData.schedule[pickIndex + 1][0]['utcDate']}
                    />
                  </FieldBlock>
                );
              })) : null
          }
        </FieldsGrid>
      </FieldArray>
    </div>
  );
};

export default MyPicksFields;