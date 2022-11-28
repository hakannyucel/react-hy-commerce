import {
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

const App = () => {

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />

      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route exact path="/:id" element={<SingleProduct />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;