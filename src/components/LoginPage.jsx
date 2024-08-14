import { useState } from "react";
const LoginPage = () => {
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  //Estado para los errores
  const [error, setError] = useState(false);
  //Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (!nombre.trim() || !apellido.trim() || !edad.trim() || !email.trim()) {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <>
      <hr /> <h1>Login de Usuario</h1>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? alert("Todos los campos son obligatorios") : null}
        <div className="form-group">
                    <label>Nombre</label>         {" "}
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
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <hr />
    </>
  );
};
export default LoginPage;
