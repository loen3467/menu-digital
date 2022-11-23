import React from "react";
import plato from "../assets/img/plato.svg";
import "../styles/pinkFood.css";

function PinkFood(props) {
  // [{
  //   theme:'PinkFood',
  //   name:'Burguer',
  //   precio:15
  // },
  // {
  //   theme:'yellow',
  //   name:'Pollo',
  //   precio:30
  // }]

  /* const { theme, name } = props;
  return (
    <div className={theme}>
      <SmallPhoto />
      <Name />
      <div className="pf-foot">
        <Price />
        <PinkAdd />
      </div>
    </div>
  ); */

  return (
    <div className="pink-food">
      <div>
        <img src={plato} />
      </div>
      <div className="name">
        <div className="titulo">Pollo a la Broaster</div>
        <div className="descripcion">Medium | Cheese, hungarian pepper</div>
      </div>
      <div className="pf-foot">
        <div className="price">Bs. 18,00</div>
        <div className="pink-add">+ ADD</div>
      </div>
    </div>
  );
}

export { PinkFood };
