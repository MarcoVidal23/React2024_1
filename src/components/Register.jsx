import { useState } from "react";
function Register() {
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  //Estado para los errores
  const [registro, setRegistro] = useState(false);
  //Función antes de enviar el formulario

  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (!nombre.trim() || !apellido.trim() || !edad.trim() || !email.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (!email.includes("@")) {
      alert(" Campo email No tiene formato de correo");
      return;
    }
    alert(" INGRESO VALIDADO ESTA CORRECTO");
    setRegistro(true);
  };
  return (
    <>
      {!registro ? (
        <>
          <hr /> <h1>Registro de Usuario</h1>
          <form className="formulario">
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
              />
            </div>
            <div className="form-group">
              <label>Apellido</label>
              <input
                type="text"
                name="apellido"
                className="form-control"
                onChange={(e) => setApellido(e.target.value)}
                value={apellido}
              />
            </div>
            <div className="form-group">
              <label>Edad</label>
              <input
                type="text"
                name="edad"
                className="form-control"
                onChange={(e) => setEdad(e.target.value)}
                value={edad}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={validarDatos}
            >
              Enviar
            </button>
          </form>
          <hr />
        </>
      ) : (
        <p>
          {" "}
          <h3>Usuario Registrado:</h3>
          {nombre}{" "}
        </p>
      )}
    </>
  );
}
export default Register;
