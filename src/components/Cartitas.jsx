import React from "react";
import { pizza } from "../data/pizza";
export const Cartitas = ({ allPizza,setAllPizza,countPizza,setCountPizza,total,setTotal, }) => {
  const AgregaCarro = carrito => {
    if (allPizza.find(item => item.id === carrito.id)) {
      const pizzas = allPizza.map(item => item.id === carrito.id) ? { ...item, cantidad: item.cantidad + 1 } : item
    };
    setTotal(total + carrito.price * carrito.cantidad);
    setCountPizza(countPizza + carrito.cantidad);
    return setAllPizza([...pizzas]);
  };
return (
  <div className="container-items">
    {pizza.map((carrito) => (
      <div className="item" key={carrito.id}>
        <img src={carrito.img} className="card-header" alt="pizza" />
        <div className="row">
          <h5 className="card-tittle fw-ligth mb-3"> {carrito.id}</h5>
          <h5 className="card-tittle fw-ligth mb-3">Pizza {carrito.tittle}</h5>
          <p className="card-text h6 fw-ligth">🍕{carrito.ingredients}</p>
          <ul className="list-group list-group-flush text-rigth">
            <li className="btn btn-dark font-weight-bold">
              Precio ${carrito.price}
            </li>
          </ul>
        </div>
        <hr />
        <div className="row">
          <button onClick={() => AgregaCarro(carrito)} className="btn btn-dark">
            {" "}
            Agrega a carrito 🛒
          </button>
        </div>
      </div>
    ))}
  </div>
);



}
export default Cartitas;
