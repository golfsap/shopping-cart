import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsDataProvider } from "./context/ProductsDataProvider";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <ProductsDataProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </ProductsDataProvider>
    </Router>
  );
}

export default App;
