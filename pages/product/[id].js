import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extraOption, setExtraOption] = useState([]);
  const dispatch = useDispatch();

  //this functiong will change the price whenver users choose the size of the pizza or adding exatra option
  const changePrice = (number) => {
    setPrice(price + number);
  };

  //to handle when a user clicks on each size of the pizza and it will calculate the price according to the sizes
  const handleSize = (sizeIndex) => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);

    changePrice(difference);
  };

  const handleChange = (event, eachOption) => {
    const checked = event.target.checked;

    if (checked) {
      changePrice(eachOption.price);
      //at first we set extraOption to an empty array, but once a user checks on the checkBox it will add that item to the usesate hook
      setExtraOption((prev) => [...prev, eachOption]);
    } else {
      changePrice(-eachOption.price);
      //when users unchecks the checkbox it will remove from the usestate hook above
      setExtraOption(
        extraOption.filter((extra) => extra._id !== eachOption._id)
      );
    }
  };

  //this function is handling the add to cart button
  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extraOption, price, quantity }));
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
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>

        <div className={styles.sizesWrapper}>
          {/* onClick={() => handleSize(0)} when users click on each size the price will get changed accordingly */}
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.eachSize}>Small</span>
          </div>

          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.eachSize}>Meduim</span>
          </div>

          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.eachSize}>Large</span>
          </div>
        </div>

        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredientsWrapper}>
          {pizza.extraOptions.map((eachOption) => (
            <div className={styles.option} key={eachOption._id}>
              <input
                type="checkbox"
                name={eachOption.text}
                id={eachOption.text}
                className={styles.checkbox}
                onChange={(event) => handleChange(event, eachOption)}
              />
              <label htmlFor="double">{eachOption.text}</label>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to cart
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
      pizza: response.data
    }
  };
};

export default Product;
