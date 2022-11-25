import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import carrito from "../assets/image/carrito.svg";
import vector from "../assets/image/vector.svg";
import "./styles/header.css";
import "./styles/navMenu.css";

function NavMenu() {
  return (
    <div className="header">
      <div className="header-top">
        <Link to="/">
          <img src={logo} />
        </Link>

        <div className="nav-menu">
          <Link to="/Carta" className="nv-red">
            Carta
          </Link>
          <Link to="/bebidas" className="nv-red">
            Bebidas
          </Link>
          <Link to="/info" className="nv-red">
            Info
          </Link>
          <Link to="voto" className="nv-red">
            Voto
          </Link>
        </div>

        <Link to="/pedido">
          <img src={carrito} />
        </Link>
      </div>
      <img src={vector} />
    </div>
  );
}

export { NavMenu };
