import { useEffect, createContext, useContext } from 'react'

import Firebase from './firebase'
import { useCurrentUser } from 'context/currentUser'
import { useRef } from 'react'

const FirebaseContext = createContext(null)

export const useFirebase = () => {
    return useContext(FirebaseContext)
}

export function FirebaseProvider({ children }) {
    const firebase = new Firebase()
    const { setCurrentUser, setIdToken } = useCurrentUser()
    const hasRunFocusLogic = useRef(false)

    const handleVisibilityChange = () => {
        if (!document.hidden && !hasRunFocusLogic.current) {
            // Page has become visible, and we haven't run the focus logic since it was last hidden
            refreshIdToken()
            hasRunFocusLogic.current = true
        } else if (document.hidden) {
            // Page has become hidden, so we can reset the flag
            hasRunFocusLogic.current = false
        }
    }

    const refreshIdToken = async () => {
        const idToken = await firebase.retrieveToken()
        if (idToken) {
            setIdToken(idToken)
        } else {
            setCurrentUser(null)
            setIdToken(null)
            firebase.doSignOut()
        }
    }
    useEffect(() => {
        // Listen authenticated user
        const unsubscriber = firebase.auth.onAuthStateChanged(async user => {
            try {
                if (user) {
                    refreshIdToken()
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

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener(
                'visibilitychange',
                handleVisibilityChange,
                false
            )
            window.addEventListener('focus', handleVisibilityChange, false)
        }

        return () => {
            window.removeEventListener(
                'visibilitychange',
                handleVisibilityChange
            )
            window.removeEventListener('focus', handleVisibilityChange)
        }
    }, [])

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}
