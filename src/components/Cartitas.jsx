import React from "react";

export const Cartitas= ({ img, tittle, ingredients, price, more }) => {
    return (
      <>
        <div className="card-flex">
          <img src={img} className="card-img-top" alt="pizza" />
          <div className="card-body">
            <h5 className="card-tittle fw-ligth mb-3">Pizza {tittle}</h5>
            <p className="card-text h6 fw-ligth">🍕{ingredients}</p>
            <ul className="list-group list-group-flush text-rigth">
              <li className="btn btn-dark font-weight-bold">Precio ${price}</li>
            </ul>
            <hr />
            <button className="btn btn-dark">{more} 🛒</button>
          </div>
        </div>
      </>
    );
};
export default Cartitas;