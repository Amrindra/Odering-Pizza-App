import Image from "next/image";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>Product</th>
            <th>Name</th>
            <th>Extra</th>
            <th>Price</th>
            <th>Quanitity</th>
            <th>Total</th>
          </tr>

          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza.png"
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>

            <td>
              <span className={styles.name}>CARALZO</span>
            </td>

            <td>
              <span className={styles.extra}>
                Double ingredient, spicy sauce
              </span>
            </td>

            <td>
              <span className={styles.price}>$19.99</span>
            </td>

            <td>
              <span className={styles.Quanitity}>2</span>
            </td>

            <td>
              <span className={styles.total}>$40.80</span>
            </td>
          </tr>
        </table>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTotal}>Subtotal: </b>$79.99
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTotal}>Discount: </b>$00.00
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTotal}>Total: </b>$79.99
          </div>

          <button className={styles.button}>CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
