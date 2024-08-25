import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPizza from "./components/CardPizza";
import Carrito from "./components/Carrito";
import { pizza } from "./data/pizza";



function App() {
const [dato,setDato] = useState(pizza);  
  return (
    <>
      <Navbar />

      <Header />

      <div className="grid-pizza">
        {dato.map((card) => (
          <Cartitas {...card} key={card.id} />
        ))}
      </div>
     
      <Footer />
    </>
  );
}
export default App;
