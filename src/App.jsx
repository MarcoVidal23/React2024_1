import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Cartitas from "./components/Cartitas";
import { pizza } from "./data/pizza";
import { Cart } from "./components/Cart";


function App() {

const [dato, SetDato] = useState(pizza);
const [cart, setCart] = useState([]); 

const handleAddToCart = (pizzacart) => {
		if (cart.some((pizzaCart) => pizzaCart.id == pizzacart.id)) {
			const update = cart.map((pizzaCart) =>
				pizzaCart.id == pizzacart.id
					? { ...pizzaCart, cantidad: pizzaCart.cantidad + 1 }
					: pizzaCart
			);

			setCart(update);
		} else {
			setCart([...cart,
				{     ...pizza,
					cantidad: 1,
				},
			]);
		}
	};  
  
  
  return (
    <>
      <Navbar />

      <Header />
      <div className="grid-pizzas ">
        {dato.map((card) => (
         <Cartitas {...card} />
        ))}
      </div>

      <Footer />
    </>
  );
}
export default App;
