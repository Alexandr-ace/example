import React from "react";
import styles from "./TheFirst.module.scss";

const TheFirst = () => {
  const logo1 = require("../../snippet/image/image1.png");
  const logo2 = require("../../snippet/image/image2.png");
  return (
    <div className={styles.main}>
      <div className={styles.up}>
        <div className={styles.up_one}>
          <img src={logo1} alt="art" />
        </div>
        <div className={styles.up_two}>
          <span>Work</span>
          <span>About</span>
          <span>Shop</span>
          <span>Blog</span>
          <span>Contact</span>
        </div>
        <div className={styles.up_three}>
          <span>Cart(0)</span>
          <img src={logo2} alt="art" />
        </div>
      </div>
    </div>
  );
};

export default TheFirst;
