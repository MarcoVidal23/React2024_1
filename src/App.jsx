import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cartitas from "./components/Cartitas";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      img: "/imagen/pizza-1.png",
      tittle: "Napolitana",
      ingredients: "mozzarella tomates jamón orégano",
      price: "5.950",
      more: "Agrega",
    },
    {
      img: "/imagen/pizza-2.png",
      tittle: "Española",
      ingredients: "mozzarella gorgonzola parmesano provolone",
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
      <Navbar />
      <Home />{" "}
      <div className="card-grid p-3">
        {" "}
        {data.map((card) => (
          <Cartitas {...card} />
        ))}
        {" "}
      </div>
     <Footer />{" "}
    </>
  );
}
export default App;
