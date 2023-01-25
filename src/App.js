import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import Card from "./components/Card/Card"
import Home from "./pages/home";


//no hace falta agregar navbar/index, pues se sobreentiende que lo busca en index cuando no cambio el nombre de la carpeta
function App() {
  return (
    <Router>
      <SideBar />
      <Navbar />
      <Card/>
      <Home />
    </Router>
  );
}

export default App;
