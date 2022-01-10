import { createContext, useState, } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [accountNumber, setAccountNumber] = useState('');

    return (
        <AuthContext.Provider value={{ auth, setAuth, accountNumber, setAccountNumber }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;