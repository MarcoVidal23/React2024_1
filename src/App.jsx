import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";


import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      img: "/imagen/pizza-1.png",
      tittle: "Napolitana",
      ingredients: "mozzarella  tomates  jamón  orégano",
      price: "5.950",
      more: "Agrega",
    },
    {
      img: "/imagen/pizza-2.png",
      tittle: "Española",
      ingredients: "mozzarella gorgonzola parmesano  provolone",
      price: "6.950",
      more: "Agrega",
    },
    {
      img: "/imagen/pizza-3.png",
      tittle: "Pepperoni",
      ingredients: "mozzarella pepperoni oregano",
      price: "6.900",
      more: "Agrega",
    },
  ];

  return (
    <>
   
      <LoginPage />
     
    </>
  );
}
export default App;
