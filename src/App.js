import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import FindArt from "./components/findArt";
import Login from "./components/login";
import Exhibitions from "./components/viewExhibitions";

function App() {
  return (
    <>
      <>DEE WIZ</>
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
