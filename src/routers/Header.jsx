import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carta } from "../pages/Carta";
import { Bebidas } from "../pages/Bebidas";
import { Info } from "../pages/Info";
import { Voto } from "../pages/Voto";
import { Inicio } from "../pages/Inicio";
import { Pedido } from "../pages/Pedido";
import { NavMenu } from "../components/NavMenu";
import "../components/styles/header.css";

function Header() {
  return (
    <div>
      {/* <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="carta" element={<Carta />} />
          <Route path="bebidas" element={<Bebidas />} />
          <Route path="info" element={<Info />} />
          <Route path="voto" element={<Voto />} />
          <Route path="pedido" element={<Pedido />} />
          <Route path="*" element={<div>ERROR 404</div>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export { Header };
