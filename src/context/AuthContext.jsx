import {  createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') || null);
    const navigate = useNavigate();

    const login = (token) => {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
        navigate("/dashboard");

    }
    const logout = () => {
        localStorage.removeItem('authToken');
        setAuthToken(null);
        navigate("/login");
    };


    return (
        <AuthContext.Provider value={{authToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);