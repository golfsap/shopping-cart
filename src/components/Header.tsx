import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.headerTitle}>Essentials</p>
      <p>Join the cult.</p>
      <button>Shop</button>
    </header>
  );
}

export default Header;
