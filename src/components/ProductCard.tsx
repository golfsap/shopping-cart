import { Product } from "../context/ProductsDataProvider";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className={styles.productCard}>
      <div className={styles.cardImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.cardDetails}>
        <h3>{product.title}</h3>
        <p>{product.price} usd</p>
      </div>
      <button onClick={() => addToCart(product.id)}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
