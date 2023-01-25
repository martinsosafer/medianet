import React from "react";
import CardS from "./CardS.css";

const Card = () => {
  return (
    <div>
      <div id="card">
        <h1 id="name">25 Megas Internet</h1>
        <div id="conjuntoLi">
        <h5>
          <li id="liCard">- Misma velocidad carga</li>
          <li id="liCard">- Instalación bonificada</li>
        </h5>
        <h5>
          <li id="liCard">-Televisión premium x $3100</li>
          <li id="liCard">- Incluidos packs premium</li>{" "}
        </h5>
        </div>
        <div id="imagenes">
        <img id="iconoCard" src="https://cdn-icons-png.flaticon.com/512/5556/5556367.png"
        alt="fibra optica"
        width={40}
        height={40}
        />
         <img id="iconoCard" src="https://cdn-icons-png.flaticon.com/512/8313/8313119.png"
        alt="fibra optica"
        width={40}
        height={40}
        />
         <img id="iconoCard" src="https://cdn-icons-png.flaticon.com/512/1321/1321688.png"
        alt="fibra optica"
        width={40}
        height={40}
        />
             <img id="iconoCard" src="https://cdn-icons-png.flaticon.com/512/159/159599.png"
        alt="fibra optica"
        width={40}
        height={40}
        />
      </div>
      </div>

      <div id="card">
        <h1 id="name">50 Megas Internet</h1>
        <h5>🧩 </h5>
        <h5>🌟 </h5>
       
      </div>

      <div id="card">
        <h1 id="name">100 Megas Internet</h1>

        <h5> </h5>
        <h5>🌟 </h5>
        {/* <Link to={`/details/${id}`}>
        <button id="MoreInfo">More information.. ➡️</button>
      </Link> */}
      </div>
    </div>
  );
};

export default Card;
