
import './App.css';
import Login from './Pages/Login'; 
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div >
     <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
