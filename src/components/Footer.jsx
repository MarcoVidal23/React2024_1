import React from "react";

export const Footer = () => {
    return (
      <>
        <footer className="card-footer text-center text-white  bg-black col-md-12  mt-5 font-weight-bold">
          <small className="text-center mt-5  footer-copyright">
            &copy; 2021 Pizzeria Mamma Mia! . Todos los derechos reservados.
          </small>
        </footer>
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </>
    );
};

export default Footer;
