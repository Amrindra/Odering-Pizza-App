import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Shop in Boston</title>
        <meta name="description" content="Best Pizza In Town" />
      </Head>
    </div>
  );
}
