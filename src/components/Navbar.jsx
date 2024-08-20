
export const Navbar = () => {
  let total = 0;
  const token = false;
  return (
    <>
      <div class="fluid-container">
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand text-white" href="#">
            Mamma Mia
          </a>

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
          <ul class="nav justify-content-end">
            <li className="d-flex flex-row-reverse">
              <a className="p2" href="#">
                🛒 Total: $
              </a>
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
