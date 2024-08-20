import React from "react";
import PropTypes from "prop-types";
const Cartitas = ({ img, tittle, ingredients, price, add }) => {
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
          <div>
            <button className="btn btn-dark">{add} 🛒</button>
          </div>
        </div>
     
    </>
  );

  
     
};
export default Cartitas;
