import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Cartitas from "./components/Cartitas";
import { pizza } from './data/pizza';
import { useState } from "react";


function App() {
  const [data] =  useState(pizza);
   

  return (
    <>
      <Navbar />

      <Header />
      <div className="d-flex flex-row  flexalign-items-start gap-1 ">
        {data.map((card) => (
          <Cartitas {...card} />
        ))}
      </div>

      <Footer />
    </>
  );
}
export default App;
