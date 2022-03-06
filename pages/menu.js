import styles from "../styles/Menu.module.css";

function Menu() {
  return (
    <div className={styles.container}>
      <h1>MENU</h1>
      <div className={styles.menuBody}>
        <ul className={styles.menuTitles}>
          <li className={styles.item}>Pizza </li>
          <li className={styles.item}>Calzone </li>
          <li className={styles.item}>Pasta </li>
          <li className={styles.item}>Wings </li>
          <li className={styles.item}>Fries </li>
          <li className={styles.item}>Drink </li>
        </ul>

        <ul className={styles.menuPrices}>
          <li className={styles.item}>Pizza </li>
          <li className={styles.item}>Calzone </li>
          <li className={styles.item}>Pasta </li>
          <li className={styles.item}>Wings </li>
          <li className={styles.item}>Fries </li>
          <li className={styles.item}>Drink </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
