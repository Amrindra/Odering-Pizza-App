import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="https://img.icons8.com/cute-clipart/100/000000/ringing-phone.png"
            alt=""
            width="32"
            height="32"
          />
        </div>

        <div className={styles.nav_exts}>
          <div className={styles.nav_text}>ORDER NOW</div>
          <div className={styles.nav_text}>999 999 999</div>
        </div>
      </div>

      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default Navbar;
