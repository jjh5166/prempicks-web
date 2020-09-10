import { Formik } from 'formik';
import axios from 'axios';
import {serverUrl} from '../../constants';
import MyPicksFields from './Fields';
import MyPicksSchedule from './Schedule';
import { MpButtons } from './Buttons';
import { MyPicksContainer, MpSubmitButton, MpForm } from './styled';
import { validationSchema } from './validate';

function setPickSubmission(data){
  return Object.assign({}, ...(data.map(item => ({ [item.matchday]: item.team_id }))));
};

const MyPicks = ({ authUser, initialValues, schedule }) => {
  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={{
        picks: initialValues
      }}
      onSubmit={async (data, { setSubmitting }) => {
        setSubmitting(true);
        await axios.patch(
          `${serverUrl}/v1/mypicks`, {
            "idToken": authUser.idToken,
            "picks": setPickSubmission(data.picks)
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
          <MpButtons />
          <MyPicksContainer>
            <MyPicksFields values={values} />
            <MyPicksSchedule schedule={schedule}/>
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