import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Router from 'next/router';

import FormFields from '../elements/FormFields';
import Bttn from '../elements/Bttn';
import { FormContainer } from '../Base/styled';
import { validationSchema } from './validate';
import { initialValues, teamField } from './formConfig';

const GuestTeam = () => {
  const dispatch = useDispatch();
  const setTeam = async (team) => {
    dispatch({ type: "SET_TEAM", team_name: team });
  };
  return (
    <FormContainer>
      <h2>{'Welcome!'}</h2>
      <p>{`Welcome to the PremPicks. This application hosts a picks league throughout the Premier League 
      season. Scores are determined based on quality of the teams and the results of the matches. Check out
      the rules after entering a team name below. User data in guest mode is randomly generated nothing is stored.`}</p>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (data, { setSubmitting }) => {
          setSubmitting(true);
          await setTeam(data.team_name);
          await Router.push('/guest/mypicks');
        }}
      >
        {({ dirty, isValid, isSubmitting }) => (
          <Form>
            <FormFields fields={teamField} />
            <Bttn text={'Submit'} disabled={!dirty || !isValid || isSubmitting} />
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default GuestTeam;