import React from "react";
import { YellowFood } from "./YellowFood";
import "../styles/centerContainer.css";

function CenterContainer() {
  // const platos=[{
  //   theme:'PinkFood',
  //   name:'Burguer',
  //   precio:15
  // },
  // {
  //   theme:'yellow',
  //   name:'Pollo',
  //   precio:30
  // }]

  /* return (
    <div className="center-container">
      - Entrada -
      <Food theme={platos.theme} name={platos.name} />
      <YellowFood />
      <YellowFood />
      <YellowFood />
    </div>
  ); */

  return (
    <div className="center-container">
      - Entrada -
      <YellowFood />
      <YellowFood />
      <YellowFood />
      <YellowFood />
    </div>
  );
}

export { CenterContainer };
