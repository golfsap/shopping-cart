import { useProducts } from "../context/ProductsDataProvider";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.css";

function ProductList() {
  const products = useProducts();

  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
