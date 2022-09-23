import CardsComponent from "./components/Cards";
import HeaderComponent from "./components/Header";
import NewButtonComponent from "./components/NewButton";
import UnloggedHeaderComponent from "./components/UnloggedHeader";

function Home() {
  const user = null

  return (
    <div>
      {user ? <HeaderComponent/> : <UnloggedHeaderComponent /> }
      <div className="h-[calc(100vh-73px)] w-full flex justify-center">
        <div className="absolute left-0 py-10 px-4">
          <NewButtonComponent/>
        </div>
        <div className="w-[80%]">
          <CardsComponent/>
        </div>
      </div>
    </div>
  );
}

export default Home;