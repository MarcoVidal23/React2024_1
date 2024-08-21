import React from "react";
import PropTypes from "prop-types";





function Cartitas({ id,img, tittle, ingredients, price, add, cantidad }) {
  return (
    <>
      <div className="row">
        <img src={img} className="card-header" alt="pizza" />
        <div className="row">
          <h5 className="card-tittle fw-ligth mb-3">Pizza {tittle}</h5>
          <p className="card-text h6 fw-ligth">🍕{ingredients}</p>
          <ul className="list-group list-group-flush text-rigth">
            <li className="btn btn-dark font-weight-bold">Precio ${price}</li>
          </ul>
        </div>
        <hr />
        <div className="row">
          <button onClick={() => addToCart({ id })} className="btn btn-dark">{add} 🛒</button>
          <p className="btn btn-dark">Cantidad: {cantidad} </p>
        </div>
      </div>
    </>
  );



}
export default Cartitas;
