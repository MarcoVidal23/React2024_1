import { useMemo } from "react";

export default function Navbar({cart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart }) {
  
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.cantidad * item.price), 0), [cart]);
  
  return (
    <header>
      <div className="fluid-container ">
        <nav className="navbar  navbar-dark bg-dark">
          <h3 className="col-md-0  mt-1 " href="#">
            Pizzeria Mamma Mia
          </h3>
          <ul className="nav justify-content-start">
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
          <div className="carrito">
            <img className="img-fluid" src="imagen/carrito.png" alt="" />
          </div>
          <button
            className="navbar-toggler"
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
      <div id="carrito" className="bg-white p-3">
        {cart.length === 0 ? (
          <p className="text-center">El carrito esta vacio</p>
        ) : (
          <>
            <table className="w-100 table">
              <thead>
                <tr>
                  <th>Imagen</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((carro) => (
                  <tr key={carro.id}>
                    <td>
                      <img
                        className="img-fluid"
                        src={carro.img}
                        alt="imagen carrito"
                      />
                    </td>
                    <td>{carro.tittle}</td>
                    <td className="fw-bold">${carro.price}</td>
                    <td className="flex align-items-start gap-4">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => decreaseQuantity(carro.id)}
                      >
                        -
                      </button>
                      {carro.cantidad}
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={() => increaseQuantity(carro.id)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => removeFromCart(carro.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="btn btn-dark font-weight-bold">
              Total pagar:
              <span className="font-weight-bold">${cartTotal}</span>
            </p>
          </>
        )}
        <button className="btn btn-dark w-100 mt-3 p-2" onClick={clearCart}>
          Vaciar Carrito{" "}
        </button>
      </div>
    </header>
  );
}     