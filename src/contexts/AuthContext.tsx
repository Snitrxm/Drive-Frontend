import { parseCookies } from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import { registerCookie, USER_COOKIE_NAME } from "../constants/cookie";
import { driveApi } from "../services/api";

interface AuthContextData {
    signed: boolean;
    User: any;
    Register(username: string, email: string, password: string): Promise<any>;
    Login(email: string, password: string): Promise<boolean>;
}

interface User {
    username: string;
    email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        loadTokenFromCookies();
    }, [])

    const Register = async (username: string, email: string, password: string) => { 
        const { data } = await driveApi.post("/users", {
            email,
            password,
            username
        })

        return data;
    }

    const Login = async (email: string, password: string) => {
        const response = await driveApi.post("/users/login", {
            email,
            password,
        })

        setUser(response.data.user);

        registerCookie(USER_COOKIE_NAME, response.data.user.username, {
            maxAge: 60 * 60 * 23, // valid during 23 hours
        })

        registerCookie("token", response.data.token, {
            maxAge: 60 * 60 * 23, // valid during 23 hours
        })

        return true;
    }

    const requestUserInfo = async () => {
        const cookie = parseCookies();

        const { data } = await driveApi.get(`/users/${cookie[USER_COOKIE_NAME]}`)

        return data;
    }

    const loadTokenFromCookies = async (): Promise<void> => {
        const cookies = parseCookies();

        if(cookies[USER_COOKIE_NAME]){
            try {
                const user = await requestUserInfo();
                setUser(user);
            } catch (err) {
                // show error popup
            }
        }
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), User: user, Register, Login }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
}

export default AuthContext;