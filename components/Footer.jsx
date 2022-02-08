import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Image src="/img/bg.png" alt="" layout="fill" />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>Lorem ipsum dolor sit amet.</h2>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUT RESTURANTS</h1>
          <p className={styles.text}>
            1000 St. Boston #123 <br /> Boston, 01239 <br /> (999) 999-9999
          </p>
          <p className={styles.text}>
            1000 St. Boston #123 <br /> Boston, 01239 <br /> (999) 999-9999
          </p>
          <p className={styles.text}>
            1000 St. Boston #123 <br /> Boston, 01239 <br /> (999) 999-9999
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            SATURDAY - SUNDAY <br /> 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
