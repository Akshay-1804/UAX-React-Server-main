import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

/**
 * GlobalProvider component that manages global state and session storage
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const GlobalProvider = ({ children }) => {
    // Initialize state from sessionStorage if available, otherwise use default
    const getInitialState = () => {
        const storedMenuKey = sessionStorage.getItem('menuKey');
        return {
            menuKey: storedMenuKey ? Number(storedMenuKey) : 1
        };
    };

    const initialState = {
        ...getInitialState()
    }

    const [state, setState] = useState(initialState);

    /**
     * Updates the global state with new values
     * @param {Object} newState - New state values to merge
     */
    const updateState = (newState) => {
        setState(prev => ({
            ...prev,
            ...newState
        }));
    };

    // Sync state changes to session storage
    useEffect(() => {
        sessionStorage.setItem('menuKey', String(state.menuKey));
    }, [state.menuKey]);

    return (
        <GlobalContext.Provider value={{ state, setState, updateState }}>
            {children}
        </GlobalContext.Provider>
    );
};