import React from "react";
import "./styles/evaluanos.css"

function Evaluanos(){
    return(
        <div className="formulario">
            <div className="escala">
                <span>Excelente</span>
                <span>Muy satisfecho</span>
                <span>Satisfecho</span>
                <span>Insatisfecho</span>
            </div>
            <div className="caja-de-evaluacion">
                <div className="temas">
                    <span>Calidad dels servicio:</span>
                    <span>Velocidad del servicio:</span>
                    <span>Calidad de la comida:</span>
                    <span>El ambiente y la de coracion:</span>
                    <span>Sugerencias:</span>
                </div>
                <div className="inputs">
                    <div className="fila-inputs">
                        <input type="radio" name="sq" value="Excelente" />
                        <input type="radio" name="sq" value="Muy satisfecho" />
                        <input type="radio" name="sq" value="Satisfecho" />
                        <input type="radio" name="sq" value="Insatisfecho" />
                    </div>
                    <div className="fila-inputs">
                        <input type="radio" name="sv" value="Excelente" />
                        <input type="radio" name="sv" value="Muy satisfecho" />
                        <input type="radio" name="sv" value="Satisfecho" />
                        <input type="radio" name="sv" value="Insatisfecho" />
                    </div>
                    <div className="fila-inputs">
                        <input type="radio" name="cc" value="Excelente" />
                        <input type="radio" name="cc" value="Muy satisfecho" />
                        <input type="radio" name="cc" value="Satisfecho" />
                        <input type="radio" name="cc" value="Insatisfecho" />
                    </div>
                    <div className="fila-inputs">
                        <input type="radio" name="ambiente" value="Excelente" />
                        <input type="radio" name="ambiente" value="Muy satisfecho" />
                        <input type="radio" name="ambiente" value="Satisfecho" />
                        <input type="radio" name="ambiente" value="Insatisfecho" />
                    </div>
                    <div className="fila-inputs">
                        <input className="sugerencias" type="text" name="sugerencias" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>¿Aceptas recibir informacion sobre nuestro establecimiento?</p>
                <input className="checkbox" type="checkbox" value={true} />
                <input className="boton-enviar" type="submit" value="Enviar" />
            </div>
        </div>
    );
}

export { Evaluanos };