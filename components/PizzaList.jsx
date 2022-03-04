import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Delicious. Tasty. Fresh.</h1>
      <p className={styles.desc}>
        At our pizza restaurant, it starts with dough prepared on site,
        carefully aged to perfection to create a delicious crust with real
        Italian texture. We use the finest available cheeses, vegetables, meats
        and sauces.
      </p>

      <p className={styles.desc}>
        Our pizzas are hand-tossed by experienced pizza makers and cooked
        directly on the stone in our hearth brick-lined oven to ensure an
        authentic Italian style pie.
      </p>

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
