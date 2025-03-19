import InputRocker from "./InputRocker";
import { CartItem as CartItemType, useCart } from "../context/CartContext";
import { Product } from "../context/ProductsDataProvider";
import styles from "./CartItem.module.css";

interface CartItemProps {
  item: CartItemType;
  product: Product;
}

function CartItem({ item, product }: CartItemProps) {
  const { removeFromCart } = useCart();

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.itemDetails}>
        <p className={styles.itemTitle}>{product.title}</p>
        <p className={styles.itemPrice}>{product.price} USD</p>
        <div className={styles.quantity}>
          <InputRocker item={item} />
          <div className={styles.itemTotal}>
            {Math.round(product.price * item.quantity * 100) / 100} USD
          </div>
        </div>
      </div>
      <button
        className={styles.removeBtn}
        onClick={() => removeFromCart(item.id)}
      >
        Remove item
      </button>
    </div>
  );
}

export default CartItem;
