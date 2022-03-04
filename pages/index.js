import Head from "next/head";
import Slider from "../components/Slider";

import styles from "../styles/Home.module.css";
import PizzaList from "../components/PizzaList";
import axios from "axios";
import { useState } from "react";

import Add from "../components/Add";
import AddButton from "../components/AddButton";

export default function Home({ productList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop in Boston</title>
        <meta name="description" content="Best Pizza In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />

      {<AddButton setClose={setClose} />}

      {/* passing productList data from database as a prop to the component  */}
      <PizzaList productList={productList} />
      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const response = await axios.get(
    "https://tonbb.sse.codesandbox.io/api/products"
  );
  return {
    props: {
      productList: response.data,
      admin
    }
  };
};
