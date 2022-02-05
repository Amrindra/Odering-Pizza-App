import Image from 'next/image';
import styles from '../styles/Slider.module.css';

const Slider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }}>
        <Image
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/100/000000/external-left-arrow-arrows-dreamstale-lineal-dreamstale-12.png"
          alt=""
          layout="fill"
        />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <Image
            src="https://img.icons8.com/external-konkapp-flat-konkapp/100/000000/external-pizza-seafood-konkapp-flat-konkapp.png"
            alt=""
            // layout="fill"
            width="100px"
          />
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="https://img.icons8.com/external-konkapp-flat-konkapp/100/000000/external-pizza-seafood-konkapp-flat-konkapp.png"
            alt=""
            // layout="fill"
            width="100px"
          />
        </div>

        <div className={styles.imgContainer}>
          <Image
            src="https://img.icons8.com/external-konkapp-flat-konkapp/100/000000/external-pizza-seafood-konkapp-flat-konkapp.png"
            alt=""
            // layout="fill"
            width="100px"
          />
        </div>
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }}>
        <Image
          src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/100/000000/external-right-arrow-arrows-dreamstale-lineal-dreamstale-13.png"
          alt=""
          layout="fill"
        />
      </div>
    </div>
  );
};

export default Slider;
