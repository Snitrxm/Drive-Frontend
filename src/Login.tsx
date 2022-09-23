import { useState } from "react";
import { useAuth } from "./contexts/AuthContext";

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const { Login } = useAuth();

    const handleLogin = async () => {
        await Login(email, password);
    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-[25rem] h-[28rem] border rounded-md border-gray-500">
                <div className="flex justify-center mt-3">
                    <h1 className="text-xl">Login</h1>
                </div>
                <div className="flex flex-col items-center gap-10 mt-10">
                    <input type="email" placeholder="Email" className="border rounded-md focus:outline-none p-2 w-[70%]" value={email} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className="border rounded-md focus:outline-none p-2 w-[70%]" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="border rounded-md transition-colors w-[70%] p-1 border-blue-400 hover:bg-blue-300" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;