import styles from "./Header.module.css";
import ShopButton from "./ShopButton";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>Essentials</p>
      <p className={styles.subtitle}>Join the movement.</p>
      <ShopButton />
    </header>
  );
}

export default Header;
