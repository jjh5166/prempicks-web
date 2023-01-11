import { useEffect, useState } from 'react'
import axios from 'axios'
import Router from 'next/router'
import Loader from 'react-loader-spinner'

import { serverUrl } from 'constants/index'
import LandingPage from 'components/LandingPage'
import { useFirebase } from 'components/Firebase/context'
import { useAuthUser } from 'redux/hooks'

export default function Home() {
    const authUser = useAuthUser()
    const [isLoading, setIsLoading] = useState(false)
    const firebase = useFirebase()

    useEffect(() => {
        let optedIn = false
        let hasError = false
        const fetchData = async () => {
            setIsLoading(true)
            await axios
                .get(
                    `${serverUrl}/v1/user`,
                    { params: { idToken: authUser.idToken } },
                    { headers: { 'Content-Type': 'application/json' } }
                )
                .then(res => {
                    optedIn = res.data.live
                })
                .catch(err => {
                    hasError = true
                    console.log(err.response)
                })

            setIsLoading(false)

            if (optedIn) {
                Router.push('/mypicks')
            } else if (!hasError) {
                Router.push('/user/opt-in')
            } else {
                firebase.doSignOut()
            }
        }
        if (authUser) {
            fetchData()
        }
    }, [authUser])

    return (
        <>
            {isLoading ? (
                <Loader type="Bars" color="#00BFFF" height={80} width={80} />
            ) : (
                <LandingPage />
            )}
        </>
    )
}
