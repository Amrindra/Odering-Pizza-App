import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "leftButton") {
      // if the index isn't 0 image slide to the left after clicking on left button
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "rightButton") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  // console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("leftButton")}
      >
        <Image
          src="https://img.icons8.com/ios-glyphs/100/000000/chevron-left.png"
          alt=""
          // layout="fill"
          width="60px"
          height="60px"
          objectFit="contain"
        />
      </div>

      <div
        className={styles.imagesWrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        <div className={styles.imgContainer}>
          <Image
            src="/img/Pizza1.png"
            alt=""
            layout="fill"
            objectFit="contain"
            priority
            // width="1000px"
            // height="1000px"
          />
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="/img/Pizza2.png"
            alt=""
            layout="fill"
            objectFit="contain"
            priority
            // width="200px"
            // height="200px"
          />
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="/img/pizza.png"
            alt=""
            layout="fill"
            objectFit="contain"
            // width="200px"
            // height="200px"
          />
        </div>
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("rightButton")}
      >
        <Image
          src="https://img.icons8.com/ios-glyphs/100/000000/chevron-right.png"
          alt=""
          // layout="fill"
          width="60px"
          height="60px"
        />
      </div>
    </div>
  );
};

export default Slider;
