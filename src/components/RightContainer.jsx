import React from "react";
import bigpollo from "../assets/image/big_pollo.svg";
import mediumPollo from "../assets/image/medium_pollo.svg";
import "./styles/rightContainer.css";

function RightContainer() {
  return (
    <div className="right-container">
      <div className="rc-description">
        <div className="titulo">Descripcion</div>
        <div className="descripcion">
          Pollo a la broaster, arroz, papas fritas, postres y aderesos.
        </div>
      </div>
      <div className="big">
        <div>
          <img src={bigpollo} />
        </div>
      </div>
      <div className="medium">
        <div>
          <img src={mediumPollo} />
        </div>
        <div>
          <img src={mediumPollo} />
        </div>
        <div>
          <img src={mediumPollo} />
        </div>
      </div>
    </div>
  );
}

export { RightContainer };
