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
  const [total, setTotal] = useState(0);
  const [countPizza, setCountPizza] = useState(0);
  return (
    <>
      <Navbar />

      <Header />

      <div className="grid-pizza">
        <Cartitas
          allPizza={allPizza}
          setAllPizza={setAllPizza}
          total={total}
          setTotal={setTotal}
          countPizza={countPizza}
          setCountPizza={setCountPizza } />
      </div>

      <Footer />
    </>
  );
}
export default App;
