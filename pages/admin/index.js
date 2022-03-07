import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import AddButton from "../../components/AddButton";
import Add from "../../components/Add";
import styles from "../../styles/Admin.module.css";

const Admin = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const [close, setClose] = useState(true);

  const status = ["preparing", "on the way", "delivered"];

  const handleUpdate = () => {
    console.log("Checked");
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        "https://tonbb.sse.codesandbox.io/api/products/" + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    //to find the status of the order and choose the first item of this array
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(
        "https://tonbb.sse.codesandbox.io/api/orders/" + id,
        {
          status: currentStatus + 1
        }
      );
      setOrderList([
        //add the new orders
        res.data,
        //delete the order from the orderlist
        ...orderList.filter((order) => order._id !== id)
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.adminDashboard}>ADMIN DASHBOARD</h1>
      <div className={styles.addProductButton}>
        {<AddButton setClose={setClose} />}
        {!close && <Add setClose={setClose} />}
      </div>

      <div className={styles.wrapper}>
        <div className={styles.item}>
          <h1 className={styles.title}>Products</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </tbody>

            {pizzaList.map((product) => (
              <tbody key={product._id}>
                <tr className={styles.trTitle}>
                  <td>
                    <Image
                      src={product.img}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt=""
                    />
                  </td>

                  <td>{product._id.slice(0, 5)}...</td>
                  <td>{product.title}</td>
                  <td>${product.prices[0]}</td>

                  <td>
                    <button
                      className={styles.button}
                      onClick={handleUpdate(product._id)}
                    >
                      Edit
                    </button>
                    <button
                      className={styles.button}
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>Orders</h1>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </tbody>

            {orderList.map((order) => (
              <tbody key={order._id}>
                <tr className={styles.trTitle}>
                  <td>{order._id.slice(0, 5)}...</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>
                    {order.method === 0 ? <span>CASH</span> : <span>PAID</span>}
                  </td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button onClick={() => handleStatus(order._id)}>
                      Next Stage
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  //there is a request it will take a cookie, but if there is no cookie, just take the empty string
  const myCookie = ctx.req?.cookies || "";

  //if myCookie doesn't match the TOKEN, just block the process here and don't call any API request here and then return to the login page
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false
      }
    };
  }

  const productRes = await axios.get(
    "https://tonbb.sse.codesandbox.io/api/products"
  );
  const orderRes = await axios.get(
    "https://tonbb.sse.codesandbox.io/api/orders"
  );

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data
    }
  };
};

export default Admin;
