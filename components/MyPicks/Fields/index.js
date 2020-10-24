import { useContext, createContext } from 'react';
import { FieldArray } from 'formik';
import PickField from './PickField';

import { MyPicksContext } from '../index';
import { FieldsGrid, FieldBlock } from './styled';

export const DisabledTeamsContext = createContext(null);

const MyPicksFields = ({ values }) => {
  console.log(values)
  const { showHalf, scheduleData } = useContext(MyPicksContext);
  const timeNow = new Date().toISOString();
  const slices = showHalf === 1 ? [0, 19] : [19, 38];
  const indexFactor = showHalf === 1 ? 0 : 19;
  const disabledTeams = []
  return (
    <div>
      <FieldArray name="picks">
        <FieldsGrid>
          <DisabledTeamsContext.Provider value={disabledTeams}>
          {
            values.picks ? (
              values.picks.slice(slices[0], slices[1]).map((pick, index) => {
                const pickIndex = index + indexFactor;
                const fieldDisabled = timeNow > scheduleData.schedule[pickIndex + 1][0]['utcDate']
                if (fieldDisabled){
                  disabledTeams.push(pick.team_id)
                }
                return (
                  <FieldBlock key={`pick${pickIndex}`}>
                    <span>{pick.matchday}</span>
                    <PickField
                      name={`picks.${pickIndex}.team_id`}
                      disabled={fieldDisabled}
                    />
                  </FieldBlock>
                );
              })) : null
          }
          </DisabledTeamsContext.Provider>
        </FieldsGrid>
      </FieldArray>
    </div>
  );
};

export default MyPicksFields;