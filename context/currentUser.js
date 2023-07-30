import { createContext, useContext } from 'react'

import { useLocalStorageState } from 'hooks/useLocalStorageState'

const CurrentUserContext = createContext()

export function useCurrentUser() {
    const context = useContext(CurrentUserContext)
    if (context === undefined) {
        throw new Error(
            'useCurrentUser must be used within a CurrentUserProvider'
        )
    }
    return context
}

export function CurrentUserProvider({ children }) {
    const [currentUser, setCurrentUser] = useLocalStorageState(
        'currentUser',
        null
    )
    const [idToken, setIdToken] = useLocalStorageState('idToken', null)

    const value = {
        currentUser,
        setCurrentUser,
        idToken,
        setIdToken,
    }

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}
