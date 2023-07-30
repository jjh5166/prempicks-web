import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Form, Formik } from 'formik'

import { serverUrl } from 'constants/index'
import { FormContainer } from '../Base/styled'
import FormFields from '../elements/FormFields'
import Bttn from '../elements/Bttn'
import { setErrorAlert, setSuccessAlert } from 'redux/actions/alert'
import { useCurrentUser } from 'context/currentUser'
import { validationSchema } from './validate'
import { updateFields } from './formConfig'

export default function UpdateAccountForm({ initialValues }) {
    const dispatch = useDispatch()
    const { idToken, setCurrentUser } = useCurrentUser()
    const onSubmit = async values => {
        await axios
            .put(
                `${serverUrl}/v1/user`,
                {
                    user: {
                        team_name: values.team_name,
                        email: values.email,
                    },
                    idToken: idToken,
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(user => {
                setCurrentUser(user)
                dispatch(setSuccessAlert('Account Updated'))
            })
            .catch(() =>
                dispatch(setErrorAlert('There was an error. Try Again.'))
            )
    }
    return (
        <FormContainer>
            <h2>{`Update Account`}</h2>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)
                    onSubmit(values)
                    setSubmitting(false)
                }}
            >
                {({ dirty, isValid, isSubmitting }) => (
                    <Form>
                        <FormFields fields={updateFields} />
                        <Bttn
                            text="Update"
                            disabled={!dirty || !isValid || isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
        </FormContainer>
    )
}
