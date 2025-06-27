import React, { createContext, useState } from 'react';
import App from '../App';
import { useContext } from 'react';
// Note: The above import is for demonstration purposes. In a real application, you would not import the main App component here. Instead, you would use this context in your components where needed.
// The App component is typically the root component of your application, and you would use the context within its child components.

import { useNavigate } from 'react-router-dom';
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(true)
    const[isSeller, setIsSeller] = useState(false)
    const[showUserLogin, setShowUserLogin] = useState(false)

    const value = {navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin}
    return <AppContext.Provider value={{value}}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext);  
}