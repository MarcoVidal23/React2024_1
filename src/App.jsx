import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cartitas from "./components/Cartitas";
import { pizza } from "./data/pizza";

function App() {
  const [dato, SetDato] = useState(pizza);

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
