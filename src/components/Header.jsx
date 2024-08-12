import React from "react";
export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: `url("/imagen/fondo-pizzeria.jpg")`,
        backgroundRepeat: "no-repeat",
        width: "1200px",
        height: "500px",
      }}
    >
      <div>
        <h1 className="justify-content-center   text-white font-weight-bold">
          ¡Pizzeria Mamma Mia!
        </h1>
        <h6 className="justify-content-center   text-white font-weight-bold">
          ¡Tenemos la Mejor Pizza de Chile !
        </h6>
      </div>
    </div>
  );
};

export default Header;
