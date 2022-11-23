import React from "react";
import { NavMenu } from "./NavMenu";
import logo from "../assets/image/logo.svg";
import carrito from "../assets/image/carrito.svg";
import vector from "../assets/image/vector.svg";
import "./styles/header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <img src={logo} />
        <NavMenu />
        <img src={carrito} />
      </div>
      <div className="vector">
        <img src={vector} />
      </div>
    </div>
  );
}

export { Header };
