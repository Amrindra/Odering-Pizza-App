import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  //quantity value is coming from the initialState in the cartSlice redux
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <a href="tel:123456789">
            <Image
              src="https://img.icons8.com/ios-filled/100/000000/phone.png"
              alt=""
              width="32"
              height="32"
            />
          </a>
        </div>

        <div className={styles.nav_texts}>
          {/* <div className={styles.nav_text}>ORDER NOW</div> */}
          {/* <div className={styles.nav_text}>999 999 999</div> */}
        </div>
      </div>

      <div className={styles.item}>
        <ul className={styles.nav_list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Homepage</li>
          </Link>
          <li className={styles.listItem}>Deals</li>
          <Link href="/menu">
            <li className={`${styles.listItem} ${styles.menu}`}>Menu</li>
          </Link>
          <Link href="/admin" passHref>
            <li className={`${styles.listItem} ${styles.adminOnly}`}>
              Admin Only
            </li>
          </Link>
        </ul>
      </div>

      <div className={styles.toggleIcon}>
        <Link href="/" passHref>
          <h3>HOME</h3>
        </Link>
      </div>

      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image
              src="https://img.icons8.com/external-kmg-design-flat-kmg-design/32/000000/external-shopping-cart-e-commerce-kmg-design-flat-kmg-design-2.png"
              alt=""
              width="32"
              height="32"
            />
            <div className={styles.qtyCounter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
