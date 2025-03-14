import { ProductsDataProvider } from "./context/ProductsDataProvider";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductsList";
import "./App.css";

function App() {
  return (
    <>
      <ProductsDataProvider>
        <Navbar />
        <header>
          <h1>Header</h1>
        </header>
        <main>
          <h2>Products:</h2>
          <ProductList />
        </main>
      </ProductsDataProvider>
    </>
  );
}

export default App;
