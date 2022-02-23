import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Order.module.css";

const Order = ({ order }) => {
  const status = order.status;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>

            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{order._id}</span>
              </td>

              <td>
                <span className={styles.name}>{order.customer}</span>
              </td>

              <td>
                <span className={styles.address}>{order.address}</span>
              </td>

              <td>
                <span className={styles.total}>${order.total}</span>
              </td>
            </tr>
          </table>
        </div>

        <div className={styles.row}>
          {/* statusClass(0) in the function above, index - status (0-0 will be 0) so it will show "Payment text" and the className will change to styles.done */}
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={25}
                height={25}
                alt=""
              />
            </div>
          </div>

          {/* statusClass(0) in the function above, index - status (1-0 will be 1) so it will show "Preparing text" and the className will change to styles.inProgress */}
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={25}
                height={25}
                alt=""
              />
            </div>
          </div>

          {/* statusClass(0) in the function above, index - status (2-0 will be 2) so it will show On The Way */}
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On The Way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={25}
                height={25}
                alt=""
              />
            </div>
          </div>

          {/* statusClass(0) in the function above, index - status (3-0 will be 0) so it will show Delivered */}
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={25}
                height={25}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTotal}>Subtotal: </b>${order.total}
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTotal}>Discount: </b>$00.00
          </div>

          <div className={styles.totalText}>
            <b className={styles.totalTextTotal}>Total: </b>${order.total}
          </div>

          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

//fetching only single product by specifying the params which is the _id of the product
export const getServerSideProps = async ({ params }) => {
  const response = await axios.get(
    `https://tonbb.sse.codesandbox.io/api/products/${params.id}`
  );
  return {
    props: {
      order: response.data
    }
  };
};

export default Order;
