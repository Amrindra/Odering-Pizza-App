// import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </div> */}
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <div className={styles.card}>
            <h2 className={styles.title}>MENU</h2>
            <p className={`${styles.text} ${styles.menu}`}>Pizza</p>
            <p className={`${styles.text} ${styles.menu}`}>Calzone</p>
            <p className={`${styles.text} ${styles.menu}`}>Wings</p>
            <p className={`${styles.text} ${styles.menu}`}>Sides</p>
            <p className={`${styles.text} ${styles.menu}`}>Pasta</p>
            <p className={`${styles.text} ${styles.menu}`}>Drinks</p>
            <p className={`${styles.text} ${styles.menu}`}>Desserts</p>
          </div>

          <div className={styles.card}>
            <h1 className={styles.title}>ABOUT OUR RESTURANTS</h1>
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
              MONDAY - SUNDAY <br /> 24/7
            </p>
          </div>
        </div>
      </div>
      <div className={styles.admin}>
        <Link href="/admin" passHref>
          <h3 className={styles.adminTitle}>Admin Login</h3>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
