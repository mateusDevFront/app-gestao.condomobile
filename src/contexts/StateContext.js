import React, { createContext, useContext, useReducer } from 'react'

import UserReducer from '../reducers/UserReducer'

const initialSate = {
    user: UserReducer()
}
const MainReducer = (state, action) => ({
    user: UserReducer(state.user, action)
})

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MainReducer, initialSate)

    return (
        <StateContext.Provider value={[state, dispatch]}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)