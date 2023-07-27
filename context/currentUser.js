import { createContext, useContext, useState } from 'react'

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
    const [currentUser, setCurrentUser] = useState(undefined)

    const value = {
        currentUser,
        setCurrentUser,
    }

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}
