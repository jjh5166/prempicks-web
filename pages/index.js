import { useEffect, useState } from 'react'
import Router from 'next/router'

import LandingPage from 'components/LandingPage'
import { useFirebase } from 'components/Firebase/context'
import { useAuthUser } from 'redux/hooks'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { useCurrentUser } from 'context/currentUser'
import { getUser } from 'services/prempicks'

export default function Home() {
    const authUser = useAuthUser()
    const [isLoading, setIsLoading] = useState(false)
    const firebase = useFirebase()
    const { setCurrentUser } = useCurrentUser()

    useEffect(() => {
        let shouldLogOut = false
        const fetchData = async () => {
            setIsLoading(true)

            await getUser(authUser.idToken)
                .then(user => {
                    if (user?.live) {
                        setCurrentUser(user)
                        Router.push('/mypicks')
                    } else {
                        shouldLogOut = true
                    }
                })
                .catch(err => {
                    shouldLogOut = true

                    console.log(err.response)
                })
            if (shouldLogOut) {
                setCurrentUser(null)
                firebase.doSignOut()
            }
            setIsLoading(false)
        }
        if (authUser) {
            fetchData()
        }
    }, [authUser])

    return <>{isLoading ? <LoadingIndicator /> : <LandingPage />}</>
}
