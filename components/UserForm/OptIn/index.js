import axios from 'axios'
import { useDispatch } from 'react-redux'
import Router from 'next/router'

import { serverUrl } from 'constants/index'
import Bttn from '../elements/Bttn'
import { FormContainer } from '../Base/styled'
import { setErrorAlert, setSuccessAlert } from 'redux/actions/alert'
import { useCurrentUser } from 'context/currentUser'

const OptInForm = () => {
    const dispatch = useDispatch()
    const { idToken, setCurrentUser } = useCurrentUser()
    const handleClick = async () => {
        await axios
            .post(
                `${serverUrl}/v1/user/opt-in`,
                {
                    idToken: idToken,
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(data => {
                setCurrentUser(data.res)
                dispatch(setSuccessAlert("You're in! Good Luck!"))
                Router.push('/mypicks')
            })
            .catch(() =>
                dispatch(
                    setErrorAlert(
                        'There was an error. Please contact the admin.'
                    )
                )
            )
    }
    return (
        <FormContainer>
            <h2>{`Welcome Back!`}</h2>
            <p style={{ textAlign: 'center' }}>
                {`Click the button below to opt in for the 2024-2025 season`}
            </p>

            <Bttn onClick={handleClick} text="I'm in" />
        </FormContainer>
    )
}
export default OptInForm
