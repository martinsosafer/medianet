import "./App.css";
import React from "react";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
//no hace falta agregar navbar/index, pues se sobreentiende que lo busca en index cuando no cambio el nombre de la carpeta
function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
