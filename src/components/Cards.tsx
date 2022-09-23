import noImage from "../Images/noImage.jpg";

const CardsComponent = () => { 
    return (
        <div className="w-64 h-44 rounded-md border border-gray-300 cursor-pointer">
            <div className="border-b-[1px] border-gray-300 h-[60%]">
                <img src={noImage} alt="" className="h-full w-full" />
            </div>
            <div className="hover:bg-blue-100 h-[40%]">
                <h1 className="">Texto</h1>
            </div>
        </div>
    );
}

export default CardsComponent;