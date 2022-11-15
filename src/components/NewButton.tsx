import { CircularProgress } from "@mui/material"
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { getFilesFromUser, sendFile } from "../services/api"

const NewButtonComponent = ({ setFiles }: any) => {
    const [loading, setLoading] = useState<boolean>(false)
    const { User } = useAuth();

    const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        const newFile = e.target.files as any
        const formData = new FormData()
        formData.append("file", newFile[0])
        await sendFile(formData)
        const { data } = await getFilesFromUser();
        setFiles(data)
        setLoading(false)
      }

    return (
        <div>
            {loading ? (
                <CircularProgress />
            ) : (
                <>
                    <label htmlFor="file" className="border p-2 rounded-full shadow cursor-pointer transition-colors hover:bg-gray-300 hover:shadow-lg">Novo Arquivo</label>
                    <input type="file" className="hidden" id="file" onChange={handleFileSelected}/>
                </>
            ) }
        </div>
                
    );
}

export default NewButtonComponent;