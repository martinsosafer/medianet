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
          <h3 id="h3">Fibra optica</h3>
          <h1 id="name">25 Megas </h1>
          <img src="https://cdn-icons-png.flaticon.com/512/5756/5756438.png" 
          alt="velocidad"
          width={50}
          height={50}/>
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
          
        </div>

        <div id="card">
        <h3 id="h3">Fibra optica</h3>
          <h1 id="name">50 Megas</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/5756/5756438.png" 
          alt="velocidad"
          width={50}
          height={50}/>
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
        </div>

        <div id="card">
        <h3 id="h3">Fibra optica</h3>
          <h1 id="name">100 Megas</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/5756/5756438.png" 
          alt="velocidad"
          width={50}
          height={50}/>
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
        </div>
        
      </div>
      <div id="iconos">
      <div id="imagenes">
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/tecnologia_wqufxu.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/internet_kvmd6h.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/soporte-tecnico_ndtfah.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/wifi_enkubf.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
          </div>
          <div id="imagenes">
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/tecnologia_wqufxu.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/internet_kvmd6h.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/soporte-tecnico_ndtfah.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/wifi_enkubf.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
          </div>
          <div id="imagenes">
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/tecnologia_wqufxu.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/internet_kvmd6h.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/soporte-tecnico_ndtfah.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
            <img
              id="iconoCard"
              src="https://res.cloudinary.com/dsjsbp6qy/image/upload/v1674704181/wifi_enkubf.png"
              alt="fibra optica"
              width={50}
              height={50}
            />
          </div>
      </div>
      <div id="botonCard">
        <a href="https://wa.me/573148880850" target="_blank">
          <button id="contactanos">Contactanos!</button>
        </a>
        </div>
    </div>
  );
};

export default Card;
