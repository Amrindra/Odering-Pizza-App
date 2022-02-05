import Image from "next/image";
import styles from "../styles/Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/100/000000/external-left-arrow-arrows-dreamstale-lineal-dreamstale-12.png"
          alt=""
          // layout="fill"
          width="60px"
          height="60px"
        />
      </div>

      <div className={styles.imagesWrapper}>
        <div className={styles.imgContainer}>
          <Image
            src="https://purepng.com/public/uploads/large/purepng.com-pizzafood-pizza-941524625790xzrxh.png"
            alt=""
            layout="fill"
            objectFit="contain"

            // width="600px"
            // height="600px"
          />
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="https://purepng.com/public/uploads/large/purepng.com-pizzafood-pizza-941524625790xzrxh.png"
            alt=""
            layout="fill"
            objectFit="contain"
            // width="200px"
            // height="200px"
          />
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="https://purepng.com/public/uploads/large/purepng.com-pizzafood-pizza-941524625790xzrxh.png"
            alt=""
            layout="fill"
            objectFit="contain"

            // width="200px"
            // height="200px"
          />
        </div>
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/100/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-13.png"
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
