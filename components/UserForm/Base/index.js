import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'

import { useFirebase } from 'components/Firebase/context'
import FormFields from '../elements/FormFields'
import Bttn from '../elements/Bttn'
import FormLinks from '../elements/FormLinks'
import { FormContainer } from './styled'

const UserForm = ({
    name,
    initialValues,
    validationSchema,
    submitFn,
    fields,
}) => {
    const dispatch = useDispatch()
    const firebase = useFirebase()
    return (
        <FormContainer>
            <h2>{name}</h2>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    submitFn(firebase, data, dispatch)
                    setSubmitting(false)
                }}
            >
                {({ dirty, isValid, isSubmitting }) => (
                    <Form>
                        <FormFields fields={fields} />
                        <Bttn
                            text={name}
                            disabled={!dirty || !isValid || isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
            <FormLinks formType={name} />
        </FormContainer>
    )
}

export default UserForm
