import { Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { updateMatchday } from '../../redux/thunks'

import Bttn from '../UserForm/elements/Bttn'

export const ChangeMatchday = ({ current }) => {
    const dispatch = useDispatch()
    const handleSubmit = async data => {
        dispatch(updateMatchday(data.matchday))
    }
    return (
        <Formik
            initialValues={{ matchday: current }}
            onSubmit={async data => handleSubmit(data)}
        >
            {({ dirty, isSubmitting }) => (
                <Form>
                    <Field as="select" name="matchday">
                        {[...Array(38)].map((_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </Field>
                    <Bttn
                        text="Submit"
                        type="submit"
                        disabled={!dirty || isSubmitting}
                    />
                </Form>
            )}
        </Formik>
    )
}
