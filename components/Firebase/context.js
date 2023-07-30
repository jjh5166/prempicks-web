import { useEffect, createContext, useContext } from 'react'

import Firebase from './firebase'
import { useCurrentUser } from 'context/currentUser'

const FirebaseContext = createContext(null)

export const useFirebase = () => {
    return useContext(FirebaseContext)
}

export function FirebaseProvider({ children }) {
    const firebase = new Firebase()
    const { setCurrentUser, setIdToken } = useCurrentUser()
    useEffect(() => {
        // Listen authenticated user
        const unsubscriber = firebase.auth.onAuthStateChanged(async user => {
            try {
                if (user) {
                    const idToken = await firebase.retrieveToken()
                    setIdToken(idToken)
                } else {
                    setCurrentUser(null)
                    setIdToken(null)
                    firebase.doSignOut()
                }
            } catch (error) {
                // Most probably a connection error. Handle appropriately.
            }
        })

        // Unsubscribe auth listener on unmount
        return () => unsubscriber()
    }, [])

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}
