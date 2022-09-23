const NewButtonComponent = () => {
    const handleClick = () => {
        console.log("handle")
    }

    return (
        <button onClick={handleClick} className="border rounded-full py-2 px-8 shadow transition-colors hover:bg-gray-200 hover:shadow-lg">Novo</button>
    );
}

export default NewButtonComponent;