import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import useState from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cartitas from "./components/Cartitas";
import { pizza } from "./data/pizza";

function App() {
<<<<<<< HEAD
const [dato] = useState(pizza);
=======
  const [dato] = useState(pizza);


>>>>>>> 1971b5bb23f5707e9abb62446c47ec1b8f4560ac
  return (
    <>
      <Navbar />

      <Header />

      <div className="grid-pizza">
        {dato.map((card) => (
<<<<<<< HEAD
          <Cartitas
            {...card} key={card.id} />
=======
          <Cartitas {...card} />
>>>>>>> 1971b5bb23f5707e9abb62446c47ec1b8f4560ac
        ))}
      </div>
      <Footer />
    </>
  );
}
export default App;
