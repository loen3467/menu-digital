import React from "react";
import { LeftContainer } from "../components/LeftContainer";
import { CenterContainer } from "../components/CenterContainer";
import { RightContainer } from "../components/RightContainer";
import "../components/styles/carta.css";

function Bebidas() {
  return (
    <div className="container">
      <div className="container-body">
        <LeftContainer />
        <CenterContainer />
        <RightContainer />
      </div>
      BEBIDAS
    </div>
  );
}

export { Bebidas };
