import { useState } from "react";
const Register = () => {
  //Estados del formulario
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirma, setConfirma] = useState(""); //Estado para los errores

  const [error, setError] = useState(false); //Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault(); //Validación;
    if (!email.trim() || !contraseña.trim() || !confirma.trim()) {
      setError(true);
      return;
    }
    setError(false);
  };
  return (
    <>
      {" "}
      <form className="formulario" onSubmit={validarDatos}>
         {error ? <p>Todos los campos son obligatorios</p> : null} {" "}
        <div className="form-group">
         {" "}
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {" "}
        </div>
        {" "}
        <div className="form-group">
           <label>Contraseña</label>
         {" "}
          <input
            type="contraseña"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
         {" "}
        </div>
     {" "}
        <div className="form-group">
           <label>ConfirmaContraseña</label>
           {" "}
          <input
            type="confirma"
            name="confirma"
            className="form-control"
            onChange={(e) => setConfirma(e.target.value)}
            value={confirma}
          />
          {" "}
        </div>
         {" "}
        <button type="submit" className="btn btn-primary">
           Enviar  {" "}
        </button>
         {" "}
      </form>
       <hr />  <h1>Datos ingresados</h1>  {email} - {contraseña} -{" "}
      {confirma} {" "}
    </>
  );
};
export default Register;
