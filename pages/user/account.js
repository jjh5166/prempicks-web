import { useEffect, useState } from 'react'
import Router from 'next/router'
import axios from 'axios'

import useAuthUser from '../../redux/hooks/useAuthUser'
import { serverUrl } from '../../constants'
import UpdateAccountForm from '../../components/UserForm/Update'
import { LoadingIndicator } from 'components/LoadingIndicator'

const initialValues = {
    first_name: '',
    last_name: '',
    team_name: '',
}

const UpdateAccountPage = () => {
    const authUser = useAuthUser()
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setUserData] = useState(initialValues)
    useEffect(() => {
        if (!authUser) {
            Router.push('/user/login')
        }
        const fetchData = async () => {
            setIsLoading(true)
            await axios
                .get(
                    `${serverUrl}/v1/user`,
                    { params: { idToken: authUser.idToken } },
                    { headers: { 'Content-Type': 'application/json' } }
                )
                .then(res => {
                    setUserData(res.data)
                    setIsLoading(false)
                })
                .catch(err => console.log(err.response))
        }
        if (authUser) {
            fetchData()
        }
    }, [authUser])
    return (
        <>
            {isLoading ? (
                <LoadingIndicator />
            ) : (
                <UpdateAccountForm initialValues={userData} />
            )}
        </>
    )
}

export default UpdateAccountPage
