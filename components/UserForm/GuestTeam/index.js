import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Router from 'next/router';

import FormFields from '../elements/FormFields';
import Bttn from '../elements/Bttn';
import { FormContainer } from '../Base/styled';
import { validationSchema } from './validate';
import { initialValues, teamField } from './formConfig';
import { setTeam } from '../../../redux/actions/guest';

const GuestTeam = () => {
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <h2>{'Welcome!'}</h2>
      <p>
        {`Welcome to the PremPicks. This application hosts a picks league throughout the Premier League 
      season. Sample the app by entering a team name below. User data in guest mode is randomly generated
       nothing is stored.`}
      </p>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          dispatch(setTeam(data.team_name));
          Router.push('/rules');
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