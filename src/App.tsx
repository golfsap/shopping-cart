import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsDataProvider } from "./context/ProductsDataProvider";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <ProductsDataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </ProductsDataProvider>
    </Router>
  );
}

export default App;
