import { createContext, useEffect, useState } from 'react'
import { IContext, IAuthProvider, IUser } from './types'
import { getUserLocalStorage, LoginRequest, setUserLocalStorage, SignUpRequest } from './util'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password)
        
        const payload = { token: response }

        setUser(payload);
        setUserLocalStorage(payload)
    }

    async function register(username: string, email: string, password: string) {
        const response = await SignUpRequest(username, email, password)

        const payload = { token: response.senha, email: response.email , id: response.id, type: "user" }
  
        setUser(payload);
        setUserLocalStorage(payload)
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{ ...user, authenticate, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}