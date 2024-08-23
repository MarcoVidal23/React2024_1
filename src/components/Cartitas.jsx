import React from "react";
import PropTypes from "prop-types";
import Carrito from "./Carrito";


const carro = [id, cantidad, price, subtotal, total];
function AgregaCarrito () {

    carro.map(({ id }, { cantidad }, { price }, { subtotal }, { total }, i) => (
      <Carrito key={i} id={i} cantidad={cantidad + 1} price={price} subtotal={subtotal} total={ price * cantidad} />
    ));
    return 
}
 
function Cartitas({ id,img, tittle, ingredients, price, add, cantidad }) {
  return (
    <>
      <div className="row">
        <img src={img} className="card-header" alt="pizza" />
        <div className="row">
          <h5 className="card-tittle fw-ligth mb-3">Id {id}</h5>
          <h5 className="card-tittle fw-ligth mb-3">Pizza {tittle}</h5>
          <p className="card-text h6 fw-ligth">🍕{ingredients}</p>
          <ul className="list-group list-group-flush text-rigth">
            <li className="btn btn-dark font-weight-bold">Precio ${price}</li>
          </ul>
        </div>
        <hr />
        <div className="row">
          <button onClick={() => AgregaCarrito} className="btn btn-dark">
            {add} 🛒{" "}
          </button>
          <p className="btn btn-dark">Cantidad: {cantidad} </p>
        </div>
      </div>
    </>
  );



}
export default Cartitas;
