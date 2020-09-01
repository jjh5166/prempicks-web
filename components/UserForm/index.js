import React from "react";
import { Formik, Form } from 'formik';

import { withFirebase } from '../Firebase';
import FormFields from './FormFields';
import Bttn from './Bttn';
import { FormContainer } from './styled';

const UserForm = ({ firebase, name, initialValues, validationSchema, submitFn, fields }) => {
  return(
    <FormContainer>
      <h2>{name}</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          submitFn(firebase, data);
          setSubmitting(false);
        }}
      >
        {({ dirty, isValid, isSubmitting }) => (
          <Form>
            <FormFields fields={fields} />
            <Bttn text={name} disabled={!dirty || !isValid || isSubmitting} />
          </Form>
        )}
      </Formik>
    </FormContainer>
  )
}

export default withFirebase(UserForm);