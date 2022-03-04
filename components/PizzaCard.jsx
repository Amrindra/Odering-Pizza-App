import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard({ pizza }) {
  return (
    <Link href={`/product/${pizza._id}`}>
      <div className={styles.container}>
        <div className={styles.img_card_wrapper}>
          <Image src={pizza.img} alt="" width="500" height="500" />
        </div>

        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>Price: ${pizza.prices[0]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
      </div>
    </Link>
  );
}

export default PizzaCard;
