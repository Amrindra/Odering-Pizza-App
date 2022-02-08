import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="https://img.icons8.com/ios-filled/100/000000/phone.png"
            alt=""
            width="32"
            height="32"
          />
        </div>

        <div className={styles.nav_texts}>
          <div className={styles.nav_text}>ORDER NOW</div>
          <div className={styles.nav_text}>999 999 999</div>
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.nav_list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="https://img.icons8.com/external-konkapp-flat-konkapp/64/000000/external-pizza-seafood-konkapp-flat-konkapp.png"
            alt=""
            width="32"
            height="32"
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>

      <div className={styles.item}>
        <div className={styles.cart}>
          <Image
            src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-shopping-cart-e-commerce-kmg-design-flat-kmg-design-2.png"
            alt=""
            width="32"
            height="32"
          />
          <div className={styles.qtyCounter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
