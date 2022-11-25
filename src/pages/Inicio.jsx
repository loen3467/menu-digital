import React from "react";
import fondInicio from "../assets/image/fondInicio.svg";
import "../components/styles/carta.css";

function Inicio() {
  return (
    <div className="container-body">
      <div className="fond-inicio">
        <img src="https://i94.servimg.com/u/f94/20/44/55/20/portad10.png" />
      </div>
      <button className="inicio">
        <img src="https://i94.servimg.com/u/f94/20/44/55/20/inicia10.png" />
      </button>
    </div>
  );
}

export { Inicio };
