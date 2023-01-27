import React from "react";
import CardS from "./CardS.css";

const Card = () => {
  return (
    <div class="container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2 class="h22">Fibra optica</h2>
          
            <h3>50 MEGAS</h3>
            <h1> $1200</h1>
            <p class="pCard">✓ Instalación bonificada.</p>
            <p class="pCard">✓ Misma velocidad de carga y descarga.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="box">
          <div class="content">
            <h2 class="h22"> Fibra Optica </h2>
            <h3>100 MEGAS</h3>
            <h1>$1700</h1>
            <p class="pCard">✓ Instalación bonificada.</p>
            <p class="pCard">✓ Misma velocidad de carga y descarga.</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="box">
          <div class="content">
            <h2 class="h2">Tv Premium</h2>
            <h3 class="h3">Plan TV + 50 MEGAS</h3>
            <h1>$4300</h1>
            <p class="pCard">✓ Instalación bonificada.</p>
            <p class="pCard">✓ Packs premium incluidos sin limite de tiempo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
