import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ productList }) => {
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
        {productList.map((pizza) => (
          // passing each item in the proudctList data as a prop to the PizzaCard componnent
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
