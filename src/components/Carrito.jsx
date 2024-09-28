import react from "react";
import { pizza } from "../data/pizza";
import { useState } from "react";

export const Carrito= ({ id, imagen ,price, cantidad,total }) => {
 return (
   <>
     <div className="row">
       <img src={imagen} className="card-header" alt="carrito" />
       <div className="row">
         <h5 className="card-tittle fw-ligth mb-3">Id {id}</h5>
         <p className="card-text h6 fw-ligth">Precio ${price}</p>
         <ul className="list-group list-group-flush text-rigth">
           <li className="btn btn-dark font-weight-bold">
             Cantidad {cantidad}
           </li>
           <li className="btn btn-dark font-weight-bold">Total {total}</li>
         </ul>
       </div>
     </div>
   </>
 );
};
export default Carrito;