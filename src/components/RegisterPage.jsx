import { useState } from "react";
const Register = () => {
  //Estados del formulario
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirma, setConfirma] = useState(""); 

  const [error, setError] = useState(false); 
  const [compara, setCompara] = useState(false);
  const validarDatos = (e) => {
    e.preventDefault(); //Validación;
    if (!email.trim() || !contraseña.trim() || !confirma.trim()) {
      setError(true);
      return;
    }
    setError(false);
    if (contraseña !== confirma) {
      setCompara(true);
      return;
    }
    setCompara(false);
  };
  return (
    <>
      {" "}
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}{" "}
        {compara ? <p>Datos No coinciden</p> : null}{" "}
        <div className="form-group">
          <label>Email</label>{" "}
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label>Contraseña</label>{" "}
          <input
            type="contraseña"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />{" "}
        </div>{" "}
        <div className="form-group">
          <label>ConfirmaContraseña</label>{" "}
          <input
            type="confirma"
            name="confirma"
            className="form-control"
            onChange={(e) => setConfirma(e.target.value)}
            value={confirma}
          />{" "}
        </div>{" "}
        <button type="submit" className="btn btn-primary">
          Enviar{" "}
        </button>{" "}
      </form>
    
    </>
  );
};
export default Register;
