import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Best Pizza In Town </h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod
        qui dicta numquam. Excepturi exercitationem obcaecati accusantium nulla.
        Hic, tempore.
      </p>
      <p></p>

      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
