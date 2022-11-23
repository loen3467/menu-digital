import React from "react";
import plato from "../assets/image/plato.svg";
import "./styles/yellowFood.css";

function YellowFood() {
  return (
    <div className="yellow-food">
      <div>
        <img src={plato} />
      </div>
      <div className="name">
        <div className="titulo">Pollo a la Broaster</div>
        <div className="descripcion">Medium | Cheese, hungarian pepper</div>
      </div>
      <div className="pf-foot">
        <div className="price">Bs. 18,00</div>
        <div className="orange-add">+ ADD</div>
      </div>
    </div>
  );
}

export { YellowFood };
