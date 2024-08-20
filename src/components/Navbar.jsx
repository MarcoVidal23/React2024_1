export const Navbar = () => {
  let total = 0;
  const token = false;
  return (
    <>
      <div class="fluid-container ">
        <nav class="navbar  navbar-dark bg-dark  ">
          <h3 class="col-md-0  mt-1 " href="#">
            Mamma Mia
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
          <div>
            <ul class="nav justify-content-end">
              <li className="navbar-nav ml-auto ">
                <a className="nav-link text-light " href="#">
                  🛒 Total: $
                </a>
              </li>
            </ul>
          </div>
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
