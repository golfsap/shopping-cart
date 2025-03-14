import { useProducts } from "../context/ProductsDataProvider";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = useProducts();

  return (
    <ul>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ProductList;
