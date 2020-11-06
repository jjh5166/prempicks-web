import { createContext, useState } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

import { serverUrl } from '../../constants';
import MyPicksFields from './Fields';
import MyPicksSchedule from './Schedule';
import { TwoButtons } from '../Buttons';
import { validationSchema } from './validate';
import { MyPicksContainer, MpSubmitButton, MpForm } from './styled';

function setPickSubmission(data) {
  return Object.assign({}, ...(data.map(item => ({ [item.matchday]: item.team_id }))));
};

export const MyPicksContext = createContext();

const MyPicks = ({ authUser, initialValues, scheduleData }) => {
  let initHalf = 1;
  if (scheduleData) {
    initHalf = scheduleData.currentMatchday > 19 ? 2 : 1;
  }
  const [showHalf, setShowHalf] = useState(initHalf);
  const mpContextValue = {
    showHalf: showHalf,
    scheduleData: scheduleData
  };
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={{
        picks: initialValues
      }}
      onSubmit={async (data, { setSubmitting }) => {
        const submitionData = data.picks.filter(x => !initialValues.includes(x));
        setSubmitting(true);
        await axios.patch(
          `${serverUrl}/v1/mypicks`, {
          "idToken": authUser.idToken,
          "picks": setPickSubmission(submitionData)
        },
          { headers: { 'Content-Type': 'application/json' } }
        )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err.response));
        setSubmitting(false);
      }}
    >
      {({ values, handleSubmit, dirty, isValid, errors, isSubmitting }) => (
        <MpForm onSubmit={handleSubmit}>
          <TwoButtons
            startLeft={initHalf === 1}
            switchSide={setShowHalf}
            buttonNames={['1st Half', '2nd Half']}
          />
          <MyPicksContainer>
            {scheduleData && <MyPicksContext.Provider value={mpContextValue}>
              <MyPicksFields values={values} />
              <MyPicksSchedule />
            </MyPicksContext.Provider>}
          </MyPicksContainer>
          <MpSubmitButton
            type="submit"
            disabled={!dirty || isSubmitting || !isValid}
          >Submit</MpSubmitButton>
        </MpForm>
      )}
    </Formik>
  );
};

export default MyPicks;