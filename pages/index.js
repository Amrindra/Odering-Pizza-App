import Head from "next/head";
import Slider from "../components/Slider";

import styles from "../styles/Home.module.css";
import PizzaList from "../components/PizzaList";
import axios from "axios";

export default function Home({ productList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop in Boston</title>
        <meta name="description" content="Best Pizza In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      {/* passing productList data from database as a prop to the component  */}
      <PizzaList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get(
    "https://tonbb.sse.codesandbox.io/api/products"
  );
  return {
    props: {
      productList: response.data
    }
  };
};
