import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import FindArt from "./components/findArt";
import Login from "./pages/Login/login";
import Exhibitions from "./pages/Exhibitions/viewExhibitions";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/artwork" element={<FindArt />} />
        <Route path="/login" element={<Login />} />
        <Route path="/exhibitions" element={<Exhibitions />} />
      </Routes>
    </>
  );
}

export default App;
