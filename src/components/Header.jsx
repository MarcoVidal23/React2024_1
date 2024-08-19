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

          margin: "0",
          width: "100%",
          height: "20em",
        }}
      >
        <box>
          <h1 className="card-title justify-content-center   text-white font-weight-bold ">
            ¡Pizzeria Mamma Mia!
          </h1>
        </box>
        <h5 className="card-title justify-content-center   text-white font-weight-bold">
          ¡Tenemos la Mejor Pizza de Chile !
        </h5>
      </div>
    </>
  );
};

export default Header;
