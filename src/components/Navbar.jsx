import App from "../App";
import { useState } from "react";



export const Navbar = () => {
  let total = 0;
  const token = false;
  return (
    <>
      <div class="fluid-container ">
        <nav class="navbar  navbar-dark bg-dark">
          <h3 class="col-md-0  mt-1 " href="#">
            Pizzeria Mamma Mia
          </h3>
          <ul class="nav justify-content-start">
            <li className="navbar-nav ml-auto">
              <a className="nav-link text-light" href="#">
                🍕 Home
              </a>
            </li>
            <li className="navbar-nav ml-auto">
              <a className="nav-link text-light" href="#">
                🔐 Login
              </a>
            </li>
            <li className="navbar-nav ml-auto">
              <a className="nav-link text-light" href="#">
                🔐 Register
              </a>
            </li>
          </ul>
          <ul class="badge bg-secondary col-md-0  mt-0">
            <li className="navbar  navbar-dark bg-dark  ">
              <button class="btn btn-secondary btn-lg">
                <h3>
                  Ver Carrito 🛒
                </h3>
              </button>
            </li>
          </ul>
          <button
            className="navbar-toggler "
            data-target="#navbarToggleExternalContent"
            data-toggle="collapse"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
