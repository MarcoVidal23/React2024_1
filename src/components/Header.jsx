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
          backgroundRepeat: "no-repeat",
          margin: "10px",
          width: "75em",
          height: "20em",
        }}
      >
        <box>
          <h1 className="justify-content-center   text-white font-weight-bold">
            ¡Pizzeria Mamma Mia!
          </h1>
        </box>
        <h6 className="justify-content-center  text-white font-weight-bold">
          ¡Tenemos la Mejor Pizza de Chile !
        </h6>
      </div>
    </>
  );
};

export default Header;
