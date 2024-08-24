import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cartitas from "./components/Cartitas";
import { pizza } from "./data/pizza";

function App() {
  const [allPizza,setAllPizza] = useState(pizza);
  const [carrito, setCarrito] = [];

  return (
    <>
      <Navbar />

      <Header />

      <div className="grid-pizzas ">
        {allPizza.map((card => (
          <Cartitas {...card} />
        )))} 
     </div>
      <Footer />
    </>
  );
}
export default App;
