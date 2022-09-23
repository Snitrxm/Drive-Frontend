import { BiUserCircle } from "react-icons/bi";

const HeaderComponent = () => {
    return (
        <div className="border-b-[1px] border-gray-300 p-5 flex items-center justify-between">
            <div>
                <h1 className="text-gray-800 text-2xl">Drive</h1>
            </div>
            <div>
                <BiUserCircle className="text-3xl cursor-pointer"/>
            </div>
        </div>
    );
}

export default HeaderComponent;