import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
//no hace falta agregar navbar/index, pues se sobreentiende que lo busca en index cuando no cambio el nombre de la carpeta
function App() {
  return (
    <Router>
      <SideBar />
      <Navbar />
    </Router>
  );
}

export default App;
