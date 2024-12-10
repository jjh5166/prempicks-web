import axios from 'axios'
import { useDispatch } from 'react-redux'

import MyPicksFormBase from './base'
import { serverUrl } from 'constants/index'
import { setPickSubmission } from 'utils/picks'
import { setSuccessAlert, setErrorAlert } from 'redux/actions/alert'
import { useCurrentUser } from 'context/currentUser'

const UserMyPicks = ({ initialValues, scheduleData, setPicks }) => {
    const dispatch = useDispatch()
    const { idToken } = useCurrentUser()
    const userSubmit = async data => {
        // only send changed values
        const picksToSubmit = data.picks.filter(
            x =>
                !initialValues.some(
                    initial =>
                        initial.matchday === x.matchday &&
                        initial.team_id === x.team_id
                )
        )

        await axios
            .patch(
                `${serverUrl}/v1/mypicks`,
                {
                    idToken: idToken,
                    picks: setPickSubmission(picksToSubmit),
                },
                { headers: { 'Content-Type': 'application/json' } }
            )
            .then(res => {
                dispatch(setSuccessAlert('Picks Updated'))
                setPicks(res.data.picks)
            })
            .catch(() =>
                dispatch(setErrorAlert('There was an error. Try Again.'))
            )
    }
    return (
        <MyPicksFormBase
            initialValues={initialValues}
            scheduleData={scheduleData}
            submitFn={userSubmit}
        />
    )
}

export default UserMyPicks
