import { Link } from "react-router-dom";
import redPandaImage from "../assets/red_panda.jpeg";
import ProductCard from "./ProductCard";
import styles from "./NewArrivalsSection.module.css";

function NewArrivalsSection() {
  const sampleProducts = [
    {
      id: 0,
      title: "Trail Shorts",
      price: 9000,
      image: redPandaImage,
      description:
        "A lightweight breathable short made in sweat-wicking materials and keys pockets",
    },
    {
      id: 1,
      title: "Race Tank",
      price: 11000,
      image: redPandaImage,
      description:
        "A lightweight breathable short made in sweat-wicking materials and keys pockets",
    },
    {
      id: 2,
      title: "Running Socks",
      price: 700,
      image: redPandaImage,
      description:
        "A lightweight breathable short made in sweat-wicking materials and keys pockets",
    },
    {
      id: 3,
      title: "Reflex Cap",
      price: 1200,
      image: redPandaImage,
      description:
        "A lightweight breathable short made in sweat-wicking materials and keys pockets",
    },
  ];

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
