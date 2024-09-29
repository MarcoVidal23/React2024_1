import { useState } from "react";
const LoginPage = () => {
  //Estados del formulario
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirma, setConfirma] = useState("");
   
  const validarDatos = (e) => {
    e.preventDefault(); //Validación;
    if (!email.trim() || !contraseña.trim() || !confirma.trim()) {
     alert("Todos los campos son obligatorios");
      return;
    }
  
    if (contraseña.length < 6) {
    alert("Contraseña Debe tener al menos 6 caracteres");
      return;
    }
  if (!email.includes("@")) {
    alert(" Campo email No tiene formato de correo");
    return;
  }

if (contraseña !== confirma) {
    alert("Contraseña Deben ser iguales");
      return;
    }
    alert(" LOGIN ESTA CORRECTO");
  };
     
  return (
    <>
      <hr /> <h1>Login de Usuario</h1>
      <form>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="contraseña"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        <div className="form-group">
          <label>ConfirmaContraseña</label>
          <input
            type="confirma"
            name="confirma"
            className="form-control"
            onChange={(e) => setConfirma(e.target.value)}
            value={confirma}
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
    </>
  );
};
export default LoginPage;
