import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard({ pizza }) {
  // Create our number formatter for the currency
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <Link href={`/product/${pizza._id}`}>
      <div className={styles.container}>
        <div className={styles.img_card_wrapper}>
          <Image src={pizza.img} alt="" width="500" height="500" />
        </div>

        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>
          Price: {formatter.format(pizza.prices[0])}
        </span>
        <p className={styles.desc}>{pizza.desc}</p>
      </div>
    </Link>
  );
}

export default PizzaCard;
