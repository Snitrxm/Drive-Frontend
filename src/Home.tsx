import { useEffect, useState } from "react";
import CardsComponent from "./components/Cards";
import HeaderComponent from "./components/Header";
import NewButtonComponent from "./components/NewButton";
import UnloggedHeaderComponent from "./components/UnloggedHeader";
import { useAuth } from "./contexts/AuthContext";
import { deleteFile, getFilesFromUser } from "./services/api";

function Home() {
  const { User } = useAuth();

  const [files, setFiles] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleDeleteFile = async (key: string) => {
    setLoading(true)
    await deleteFile(key)
    const { data } = await getFilesFromUser();
    setFiles(data);
    setLoading(false)
  }

  useEffect(() => {
      const getAllFilesFromUser = async () => {
          setLoading(true)
          const { data } = await getFilesFromUser();
          if (data.length > 0){
            setFiles(data)
          }
          setLoading(false)
      }

      getAllFilesFromUser();
  }, [])

  return (
    <div>
      {User ? <HeaderComponent/> : <UnloggedHeaderComponent /> }
      <div className="h-[calc(100vh-73px)] w-full flex lg:flex-row flex-col lg:items-start items-center">
        <div className="w-[100%] lg:w-[10rem] lg:h-[100%] h-[4rem] flex lg:items-start lg:pt-[2rem] items-center justify-center">
          <NewButtonComponent setFiles={setFiles}/>
        </div>
        <div>
          <CardsComponent files={files} handleDeleteFile={handleDeleteFile} loading={loading}/>
        </div>
        {}
      </div>
    </div>
  );
}

export default Home;
