import { useNavigate } from "react-router-dom";

const UnloggedHeaderComponent = () => {
    const navigate = useNavigate();


    return (
        <div className="border-b-[1px] border-gray-300 p-5 flex items-center justify-between">
            <div>
                <h1 className="text-gray-800 text-2xl">Drive</h1>
            </div>
            <div>
                <div className="flex gap-10">
                    <button className="border w-24 py-1 px-3 rounded-md transition-colors hover:text-blue-400" onClick={() => navigate("/register")}>Register</button>
                    <button className="border w-24 py-1 px-3 rounded-md transition-colors hover:text-blue-400" onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default UnloggedHeaderComponent;