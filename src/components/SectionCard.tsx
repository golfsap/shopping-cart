import styles from "./SectionCard.module.css";

interface CardDetailsProps {
  card: {
    title: string;
    detail: string;
  };
}

function SectionCard({ card }: CardDetailsProps) {
  return (
    <div className={styles.sectionCard}>
      <p className={styles.cardTitle}>{card.title}</p>
      <p className={styles.cardDetails}>{card.detail}</p>
      <button>Shop</button>
    </div>
  );
}

export default SectionCard;
