import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/home";
//no hace falta agregar navbar/index, pues se sobreentiende que lo busca en index cuando no cambio el nombre de la carpeta
function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
