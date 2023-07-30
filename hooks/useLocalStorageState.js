import { useState, useRef, useEffect } from 'react'

export function useLocalStorageState(
    key,
    defaultValue = '',
    { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
    const [state, setState] = useState(() => {
        let valueInLocalStorage
        if (typeof window !== 'undefined') {
            // Client-side-only code
            valueInLocalStorage = window.localStorage.getItem(key)
        }

        if (valueInLocalStorage) {
            return deserialize(valueInLocalStorage)
        }
        return typeof defaultValue === 'function'
            ? defaultValue()
            : defaultValue
    })

    const prevKeyRef = useRef(key)

    useEffect(() => {
        const prevKey = prevKeyRef.current
        if (prevKey !== key) {
            window.localStorage.removeItem(prevKey)
        }
        prevKeyRef.current = key
        window.localStorage.setItem(key, serialize(state))
    }, [key, state, serialize])

    return [state, setState]
}
