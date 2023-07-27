import { Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import Router from 'next/router'

import { FormContainer } from '../Base/styled'
import { initialValues, loginFields } from './formConfig'
import { validationSchema } from './validate'
import FormFields from '../elements/FormFields'
import Bttn from '../elements/Bttn'
import FormLinks from '../elements/FormLinks'
import { useFirebase } from 'components/Firebase/context'
import { setErrorAlert, setSuccessAlert } from 'redux/actions/alert'
import { getUser } from 'services/prempicks'
import { useCurrentUser } from 'context/currentUser'

export default function LoginForm() {
    const dispatch = useDispatch()
    const firebase = useFirebase()

    const { setCurrentUser } = useCurrentUser()
    const handleSubmit = async values => {
        await firebase
            .doSignInWithEmailAndPassword(values.email, values.password)
            .catch(err => {
                dispatch(setErrorAlert(err.message))
            })

        const idToken = await firebase.retrieveToken()
        if (idToken) {
            try {
                const user = await getUser(idToken)
                setCurrentUser(user)
                if (user.live) {
                    dispatch(setSuccessAlert('Welcome Back!'))
                    Router.push('/mypicks')
                } else {
                    Router.push('/user/opt-in')
                }
            } catch (e) {
                dispatch(setErrorAlert('There was an Error contact the admin'))
            }
        }
    }
    return (
        <FormContainer>
            <h2>{`Login`}</h2>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true)
                    handleSubmit(data)
                    setSubmitting(false)
                }}
            >
                {({ dirty, isValid, isSubmitting }) => (
                    <Form>
                        <FormFields fields={loginFields} />
                        <Bttn
                            text="Login"
                            disabled={!dirty || !isValid || isSubmitting}
                        />
                    </Form>
                )}
            </Formik>
            <FormLinks formType="Login" />
        </FormContainer>
    )
}
