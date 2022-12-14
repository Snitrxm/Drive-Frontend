import { BrowserRouter, Route, Routes } from "react-router-dom";
import FolderPage from "./FolderPage";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/folder/:foldername" element={<FolderPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
