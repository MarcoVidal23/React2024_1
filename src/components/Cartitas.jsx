import React from "react";
export default fuction  Pizza({Cartitas,addToCart}) {
const Cartitas= ({ img, tittle, ingredients, price,add,more }) => {
    return (
      
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
         <div className="col-4"> 
          <img className= "img-fluid" src={img} className="card-img-top" alt="pizza" />
          </div> 
        <div className="col-8">
          <h3 className="text-white fs-4 fw-bold text-uppercase">Pizza {tittle}</h3>
            <p className="card-text h6 fw-ligth">🍕{ingredients}</p>
            <ul className="list-group list-group-flush text-rigth">
              <li className="btn btn-dark font-weight-bold">Precio ${price}</li>
            </ul>
            <hr />
            <button type="button" className="btn btn-dark w-100" onClick={() =>addToCart(Cartitas)}> Agregar Carrito </button>
          </div>
        </div>
      
    );
};
};