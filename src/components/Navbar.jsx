import {LoginPage} from "./LoginPage";

export const Navbar = () => {
  let total = 0;
  const token = false;
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg col-md12  bg-black">
          <a className="text-light" href="#">
            <h5> Mamma Mia </h5>
          </a>
          <button
            className="navbar-toggler navbar-light"
            data-target="#navbarNav"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  🍕 Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  🔐 Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  🔐 Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light ml-auto" href="#">
                  🛒 Total: $
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
