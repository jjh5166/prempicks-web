import React from "react";
import { Formik, Form } from 'formik';

import FormFields from './FormFields';
import Bttn from './Bttn';
import { FormContainer } from './styled';

const UserForm = ({ name, initialValues, validationSchema, submitFn, fields }) => {
  return(
    <FormContainer>
      <h2>{name}</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          submitFn(data, setErrors);
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

export default UserForm;