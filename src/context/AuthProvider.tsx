import React, { createContext, ReactElement, useState, useContext } from 'react';
import { loginService } from '../services/login'
import { useNavigate } from "react-router-dom";
import { decodeToken, setHeader } from '../utils/token'

export const AuthContext = createContext({
    login: async (username: string, password: string) => { },
    getTokenAuth: () => { },
    logout: () => { },
    getRole: () => { }
});

type AuthContextProviderProps = {
    children: ReactElement;
};

const AuthContextProvider = ({ children }: AuthContextProviderProps): ReactElement => {
    const navigate = useNavigate();

    const login = async (username: string, password: string) => {
        loginService({ username, password }).then(
            (r: any) => {
                localStorage.setItem('token', r.payload.token)
                setHeader(r.payload.token)
                navigate("/")
            }
        ).catch()

    }
    const getTokenAuth = () => {
        const token = localStorage.getItem('token')
        return token || ''

    }

    const logout = () => {
        localStorage.removeItem('token')
    }
    const getRole = () => {
        const tokenDecoded = decodeToken(getTokenAuth())
        if (tokenDecoded) {
            return tokenDecoded.role
        }
        return ''
    }


    return (
        <AuthContext.Provider
            value={{
                login,
                getTokenAuth,
                logout,
                getRole
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export function useAuthContext(): any {
    const context = useContext(AuthContext);

    return context;
}
