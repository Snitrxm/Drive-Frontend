import { createContext, useContext, useState } from "react";
import { driveApi } from "../services/api";

interface AuthContextData {
    signed: boolean;
    Register(username: string, email: string, password: string): Promise<any>
}

interface User {
    username: string;
    email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);

    const Register = async (username: string, email: string, password: string) => { 
        const { data } = await driveApi.post("/users", {
            email,
            password,
            username
        })

        return data;
    }

    return (
        <AuthContext.Provider value={{ signed: true, Register }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}

export default AuthContext;