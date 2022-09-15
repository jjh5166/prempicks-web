import { useContext } from 'react'
import { FieldArray } from 'formik'
import PickField from './PickField'

import {
    MyPicksContext,
    ScheduleDataContext,
    DisabledTeamsContext,
    NewSelectedTeamsContext,
} from '../Context'
import { FieldsGrid, FieldBlock } from './styled'

const MyPicksFields = ({ values }) => {
    const { showHalf } = useContext(MyPicksContext)
    const scheduleData = useContext(ScheduleDataContext)
    const timeNow = new Date().toISOString()
    const slices = showHalf === 0 ? [0, 19] : [19, 38]
    const indexFactor = showHalf === 0 ? 0 : 19
    const disabledTeams = []
    const newSelectedTeams = []
    return (
        <div>
            <FieldArray name="picks">
                <FieldsGrid>
                    <DisabledTeamsContext.Provider value={disabledTeams}>
                        <NewSelectedTeamsContext.Provider
                            value={newSelectedTeams}
                        >
                            {values.picks
                                ? values.picks
                                      .slice(slices[0], slices[1])
                                      .map((pick, index) => {
                                          const pickIndex = index + indexFactor
                                          const fieldDisabled =
                                              timeNow >
                                                  scheduleData.schedule[
                                                      pickIndex + 1
                                                  ][0]['utcDate'] &&
                                              scheduleData.schedule[
                                                  pickIndex + 1
                                              ][0]['status'] !== 'POSTPONED'
                                          if (fieldDisabled) {
                                              disabledTeams.push(pick.team_id)
                                          } else if (pick.team_id) {
                                              newSelectedTeams.push(
                                                  pick.team_id
                                              )
                                          }
                                          return (
                                              <FieldBlock
                                                  key={`pick${pickIndex}`}
                                              >
                                                  <span>{pick.matchday}</span>
                                                  <PickField
                                                      name={`picks.${pickIndex}.team_id`}
                                                      disabled={fieldDisabled}
                                                  />
                                              </FieldBlock>
                                          )
                                      })
                                : null}
                        </NewSelectedTeamsContext.Provider>
                    </DisabledTeamsContext.Provider>
                </FieldsGrid>
            </FieldArray>
        </div>
    )
}

export default MyPicksFields
