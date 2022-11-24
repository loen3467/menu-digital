import React from "react";
import {ProductoAniadido} from "./ProductoAniadido"
import "./styles/carritoCompras.css"


function CarritoCompra(props) {
    return(
        <div className="carrito-principal">
            <h4>Su pedido</h4>
            <ProductoAniadido
            nombre="Noodles"
            precio="27,50"
            descripcion="with shrips, eggs and pork" />
            <ProductoAniadido
            nombre="Burger"
            precio="27,50"
            descripcion="with shrips, eggs and pork" />
            <ProductoAniadido
            nombre="Pasta"
            precio="27,50"
            descripcion="with shrips, eggs and pork" />
            <div className="precio-total">
                <div>Total</div>
                <div>Bs. 78,50</div>
            </div>
            <div className="botones">
                <div className="borrar">Borrar todo</div>
                <div className="enviar">Enviar</div>
            </div>
        </div>
        
    )
}
export { CarritoCompra };