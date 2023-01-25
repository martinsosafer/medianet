import React from "react";
import CardS from "./CardS.css";

const Card = () => {
  return (
    <div id="Cardbody">
      <div id="titulocard">
        <img
          src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674677159/Dshop/nuestros_planes_1_wmy9b3.gif"
          width={700}
          height={300}
        />
      </div>
      <div id="column">
        <div id="card">
          <h1 id="name">25 Megas Internet</h1>
          <div id="conjuntoLi">
            <h5>
              <li id="liCard">- Misma velocidad carga y desarga</li>
              <li id="liCard">- Instalación bonificada</li>
            </h5>
            <h5>
              <li id="liCard">-Televisión premium x $3100</li>
              <li id="liCard">- Incluidos packs premium</li>{" "}
            </h5>
          </div>
          <div id="imagenes">
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/5556/5556367.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/8313/8313119.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/1321/1321688.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/159/159599.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div id="card">
          <h1 id="name">50 Megas Internet</h1>
          <h1 id="precio">$1200</h1>
          <div id="conjuntoLi">
            <h5>
              <li id="liCard">- Misma velocidad carga y descarga</li>
              <li id="liCard">- Instalación bonificada</li>
            </h5>
            <h5>
              <li id="liCard">-Televisión premium x $3100</li>
              <li id="liCard">- Incluidos packs premium</li>{" "}
            </h5>
          </div>
          <div id="imagenes">
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/5556/5556367.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/8313/8313119.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/1321/1321688.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/159/159599.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div id="card">
          <h1 id="name">100 Megas Internet</h1>
          <h1 id="precio">$1700</h1>
          <div id="conjuntoLi">
            <h5>
              <li id="liCard">- Misma velocidad carga y descarga</li>
              <li id="liCard">- Instalación bonificada</li>
            </h5>
            <h5>
              <li id="liCard">-Televisión premium x $3100</li>
              <li id="liCard">- Incluidos packs premium</li>{" "}
            </h5>
          </div>
          <div id="imagenes">
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/5556/5556367.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/8313/8313119.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/1321/1321688.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
            <img
              id="iconoCard"
              src="https://cdn-icons-png.flaticon.com/512/159/159599.png"
              alt="fibra optica"
              width={40}
              height={40}
            />
          </div>
        </div>
        
      </div>
        <a href="https://wa.me/573148880850" target="_blank">
          <button id="contactanos">Contactanos!</button>
        </a>
    </div>
  );
};

export default Card;
