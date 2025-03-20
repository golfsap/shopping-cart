import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductsDataProvider } from "./context/ProductsDataProvider";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import "./App.css";
import Footer from "./components/Footer";
import styled from "styled-components";

const MainContent = styled.main`
  flex: 1;
  padding-top: 85px;
`;

function App() {
  return (
    <Router>
      <ProductsDataProvider>
        <CartProvider>
          <Navbar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </MainContent>
          <Footer />
        </CartProvider>
      </ProductsDataProvider>
    </Router>
  );
}

export default App;
