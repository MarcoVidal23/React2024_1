
export const Navbar = () => {
  let total = 0;
  const token = false;
  return (
    <>
      <div className="container-xl mt-5">
        <nav className="navbar navbar-expand-xl col-md12  bg-black">
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

          <div className="container-xl mt-5" id="navbarNav">
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
                <a
                  className="col-md-6 a mt-5 d-flex align-items-start justify-content-end"
                  href="#"
                >
                  Total: $
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
