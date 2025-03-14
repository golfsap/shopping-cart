import { Product } from "../context/ProductsDataProvider";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.cardImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.cardDetails}>
        <h3>{product.title}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
