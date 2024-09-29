import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState,useEffect } from 'react';
import "./App.css";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";


function App() {


    
  return (
    <>
      <Register />

      <LoginPage />

      <Footer />
    </>
  );
}
export default App;
