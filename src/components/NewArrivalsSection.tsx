import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import styles from "./NewArrivalsSection.module.css";
import { useProducts } from "../context/ProductsDataProvider";

function NewArrivalsSection() {
  const products = useProducts();
  const sampleProducts = products.slice(1, 5);

  return (
    <section className={styles.newArrivalsSection}>
      <h2>New Arrivals</h2>
      <ul className={styles.newArrivalsList}>
        {sampleProducts.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <Link to={"/shop"} className={styles.viewAllLink}>
        View All
      </Link>
    </section>
  );
}

export default NewArrivalsSection;
