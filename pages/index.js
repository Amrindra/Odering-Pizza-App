import Head from "next/head";
import Slider from "../components/Slider";

import styles from "../styles/Home.module.css";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop in Boston</title>
        <meta name="description" content="Best Pizza In Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Slider />
      <PizzaList />
    </div>
  );
}
