import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>

            <tr>
              <td>
                <span className={styles.id}>12345</span>
              </td>

              <td>
                <span className={styles.name}>John DOe</span>
              </td>

              <td>
                <span className={styles.address}>13 Hello Ave, MA 09812</span>
              </td>

              <td>
                <span className={styles.total}>$40.80</span>
              </td>
            </tr>
          </table>
        </div>

        <div className={styles.row}>
          <div className={styles.status}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
          </div>
        </div>
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

          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
