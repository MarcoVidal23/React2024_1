import React from "react";
export const Header = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url("/imagen/fondo-pizzeria.jpg")`,
          margin: "2px",
          width: "100%",
          height: "20em",
        }}
      >
        <box>
          <h1 className="card-title justify-content-center text-warning    font-weight-bold ">
            ¡Pizzeria Mamma Mia!
          </h1>
        </box>
        <h5 className="mx-auto justify-content-center px-0   text-white bg-secondary  font-weight-bold">
          ¡Tenemos la Mejor Pizza de Chile !
        </h5>
      </div>
    </>
  );
};

export default Header;
