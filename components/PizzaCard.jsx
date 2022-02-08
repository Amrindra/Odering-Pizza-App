import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image src="/img/Pizza2.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Hawaian</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, illum.
      </p>
    </div>
  );
}

export default PizzaCard;
