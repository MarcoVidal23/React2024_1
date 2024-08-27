import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState,useEffect } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPizza from "./components/CardPizza";
import { pizza } from "./data/pizza";


function App() {
const initialCart = () => {
  const localStorageCart = localStorage.getItem("cart");
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

  const [dato, setDato] = useState(pizza); 
 const [cart, setCart] = useState(initialCart);
const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));}, [cart]);  

  function addToCart(item) {
    const itemExists = cart.findIndex((carro) => carro.id === item.id)
    if (itemExists >= 0) {
      const updatedCart = [...cart]
      updatedCart[itemExists].cantidad++
      setCart(updatedCart)
    } else {
      item.cantidad =1
      setCart([...cart, item])
    }
      
  }
  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((carro) => carro.id !== id));
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.cantidad > 0 ) {
        return {
          ...item,
          cantidad: item.cantidad - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.cantidad >= 0) {
        return {
          ...item,
          cantidad: item.cantidad + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function clearCart(e) {
    setCart([]);
  }


    
  return (
    <>
      <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
      />

      <Header />

      <div className="grid-pizza">
        {dato.map((card) => (
          <CardPizza key={card.id} card={card} setCart={setCart} addToCart={addToCart} />
        ))}
      </div>

      <Footer />
    </>
  );
}
export default App;
