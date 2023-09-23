import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Inscription from "./Pages/inscription";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Communication from "./Pages/Communication";
import Notes from "./Pages/Notes";
import Ressources from "./Pages/Ressources";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/inscription" element={<Inscription />} />
          <Route exact path="/communication" element={<Communication />} />
          <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/ressources" element={<Ressources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
