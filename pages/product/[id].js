import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.99, 23.99, 27.99],
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante."
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imageContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        {/* pizza.price[size] meaning that showing price accroding to the size from the price array  */}
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>

        <div className={styles.sizesWrapper}>
          {/* onClick={() => setSize(0)} when users click on each size the price will get changed accordingly */}
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.eachSize}>Small</span>
          </div>

          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.eachSize}>Meduim</span>
          </div>

          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.eachSize}>Large</span>
          </div>
        </div>

        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredientsWrapper}>
          <div className={styles.option}>
            <input
              type="checkbox"
              name="double"
              id="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              name="cheese"
              id="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="double">Extra Cheese</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              name="tomatoe"
              id="totamoe"
              className={styles.checkbox}
            />
            <label htmlFor="double">Extra Tomatoe Sauce</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              name="spicy"
              id="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="double">Spicy</label>
          </div>
        </div>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
