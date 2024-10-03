import React from "react";
import Image from "next/image";
import styles from "../styles/ProductList.module.css";
const ProductList = ({item}) => {
  console.log("kkkk");
  return (
    <>
      <div className={styles.itemCard}>
        <div className={styles.itemImage}>
          <Image
            src={item.image}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.itemDetails}>
          <p className={styles.itemTitle}>{item.title}</p>
          <p className={styles.itemPrice}>Price: ${item.price}</p>
          <div className={styles.itemRating}>
            <p>Rating: {item.rating.rate}</p>
            <p>Count: {item.rating.count}</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ProductList;
