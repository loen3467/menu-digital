import React, { useEffect, useState } from "react";
import "./styles/leftContainer.css";
import "./styles/centerContainer.css";
import "./styles/header.css";
import "./styles/navMenu.css";
import logo from "../assets/image/logo.svg";
import carrito from "../assets/image/carrito.svg";
import vector from "../assets/image/vector.svg";
import { MenuItems } from "./itemsAPI/MenuItems";
import { Descriptions } from "./itemsAPI/Descriptions";
import { NavbarItems } from "./itemsAPI/NavbarItems";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Inicio } from "../pages/Inicio";
import { Navbar } from "../pages/Navbar";
import { Voto } from "../pages/Voto";
import { Pedido } from "../pages/Pedido";

import "./styles/rightContainer.css";

function Body() {
  //Left and Center Container

  const [foods, setFoods] = useState(MenuItems);

  const filterResult = (catItem) => {
    const result = MenuItems.filter((curDate) => {
      return curDate.category === catItem;
    });
    setFoods(result);
  };

  //Center and Right Container
  const [descriptions, setDescriptions] = useState(Descriptions);

  const filterResult2 = (catItem) => {
    const result = Descriptions.filter((curDate) => {
      return curDate.category === catItem;
    });
    setDescriptions(result);
  };

  //HEADER and Right Container
  const [navbars, setNavbars] = useState(NavbarItems);

  const filterResult3 = (catItem) => {
    const result = NavbarItems.filter((curDate) => {
      return curDate.category === catItem;
    });
    setNavbars(result);
  };

  const [product, setProduct] = useState([]);

  useEffect(() => {
    //montado
    {
      filterResult3("Carta"), filterResult("Entrada"), filterResult2(11);
    }

    return () => {
      //desmontado
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="header">
          <div className="header-top">
            <Link to="/" onClick={() => filterResult2(11)}>
              <img src={logo} />
            </Link>

            <div className="nav-menu">
              <Link to="/navbar">
                <button
                  onClick={() => filterResult3("Carta")}
                  className="nv-red"
                >
                  Carta
                </button>
                <button
                  onClick={() => filterResult3("Bebidas")}
                  className="nv-red"
                >
                  Bebidas
                </button>
                <button
                  onClick={() => filterResult3("Info")}
                  className="nv-red"
                >
                  Info
                </button>
              </Link>

              <Link to="/voto" className="nv-red">
                Voto
              </Link>
            </div>

            <Link to="/pedido">
              <img src={carrito} />
            </Link>
          </div>
          <img src={vector} />
        </div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="navbar" element={<Navbar />} />
          <Route path="voto" element={<Voto />} />
          <Route path="pedido" element={<Pedido />} />
          <Route path="*" element={<div>ERROR 404</div>} />
        </Routes>
      </BrowserRouter>

      <div className="container">
        <div className="container-body">
          <div className="left-container">
            {navbars.map((navbar) => {
              const { id, title } = navbar;
              return (
                <>
                  <button
                    key={id}
                    onClick={() => filterResult(title)}
                    className="ls-red"
                  >
                    {title}
                  </button>
                </>
              );
            })}
          </div>

          <div className="center-container">
            -Ensalada-
            {foods.map((food) => {
              const { id, image, title, description, price, btnAdd } = food;
              return (
                <>
                  <div
                    className="yellow-food"
                    key={id}
                    onClick={() => filterResult2(id)}
                  >
                    <div>
                      <img src={image} />
                    </div>
                    <div className="name">
                      <div className="titulo">{title}</div>
                      <div className="descripcion">{description}</div>
                    </div>
                    <div className="pf-foot">
                      <div className="price">{price}</div>
                      <div className="orange-add">{btnAdd}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          {descriptions.map((description) => {
            const {
              id,
              title,
              details,
              bigImage,
              smallImage1,
              smallImage2,
              smallImage3,
            } = description;
            return (
              <>
                <div className="right-container" key={id}>
                  <div className="rc-description">
                    <div className="titulo">{title}</div>
                    <div className="descripcion">{details}</div>
                  </div>
                  <div className="big">
                    <div>
                      <img src={bigImage} />
                    </div>
                  </div>
                  <div className="medium">
                    <div>
                      <img src={smallImage1} />
                    </div>
                    <div>
                      <img src={smallImage2} />
                    </div>
                    <div>
                      <img src={smallImage3} />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Body };
