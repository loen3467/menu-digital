import React from "react";
import { Header } from "../components/Header";
import { LeftContainer } from "../components/LeftContainer";
import { CenterContainer } from "../components/CenterContainer";
import { RightContainer } from "../components/RightContainer";
import "../components/styles/carta.css";

function Carta() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="container-body">
        <LeftContainer />
        <CenterContainer />
        <RightContainer />
      </div>
    </div>
  );
}

export { Carta };
