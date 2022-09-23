const NewButtonComponent = () => {
    const handleClick = () => {
        console.log("handle")
    }

    return (
        <div>
            <label htmlFor="file" className="border p-2 rounded-full shadow cursor-pointer transition-colors hover:bg-gray-300 hover:shadow-lg">Novo Arquivo</label>
            <input type="file" className="hidden" id="file"/>
        </div>
        
    );
}

export default NewButtonComponent;