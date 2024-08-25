import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import useState from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cartitas from "./components/Cartitas";
import { pizza } from "./data/pizza";

function App() {
  const [dato] = useState(pizza);


  return (
    <>
      <Navbar />

      <Header />

      <div className="grid-pizza">
        {dato.map((card) => (
          <Cartitas {...card} key={ dato.id} />
        ))}
      </div>
      <Footer />
    </>
  );
}
export default App;
