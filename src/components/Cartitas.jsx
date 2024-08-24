import React from "react";
import { pizza } from "../data/pizza";
import { useState } from "react";

export const [allPizza, setAllPizza] = useState(pizza);
export const [carrito, setCarrito] = [];


const Cartitas = ({ id,imagen,tittle,price,cantidad, }) => {
 return (
  <div className="card-flex">
         <img src={imagen} className="card-header" alt="pizza" />
        <div className="row">
          <h5 className="card-tittle fw-ligth mb-3"> {id}</h5>
          <h5 className="card-tittle fw-ligth mb-3">Pizza {tittle}</h5>
          <p className="card-text h6 fw-ligth">🍕{ingredients}</p>
          <ul className="list-group list-group-flush text-rigth">
            <li className="btn btn-dark font-weight-bold">
              Precio ${price}
            </li>
          </ul>
        </div>
        <hr />
        <div className="row">
          <button onClick={() => AgregaCarro()} className="btn btn-dark">
             Agrega a carrito 🛒
          </button>
        </div>
      </div>

);
}
export default Cartitas;
