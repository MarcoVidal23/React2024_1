import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import LoginPage from "./components/Register";
import RegisterPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <RegisterPage />
      <LoginPage />

      <Footer />
    </>
  );
}
export default App;
