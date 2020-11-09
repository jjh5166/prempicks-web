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
      <p>{`Welcome to the PremPicks. To sample the application and interact with the app
            as a guest user, enter a team name.  Otherwise, the pages
            that don't require a team are available to browse from the navbar.`}</p>
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