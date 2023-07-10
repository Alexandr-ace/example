import React from "react";
import styles from "./TheSecond.module.scss";
const logo3 = require("../../snippet/image/image3.png");
const logo4 = require("../../snippet/image/image4.png");
const logo5 = require("../../snippet/image/image5.png");

const TheSecond = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.left}>
          <h1 className={styles.left_h1}>
            I design digital products that make an impact.
          </h1>
          <span className={styles.left_span}>
            Hi! I’m Alex, a product designer based in Oakland. I create
            user-friendly interfaces for fast-growing startups.
          </span>
          <div className={styles.hire}>
            <span className={styles.hire_span}>Hire me!</span>
            <img className={styles.hire_img} src={logo3} alt="" />
          </div>
          <div className={styles.reward}>
            <img className={styles.reward_img} src={logo4} alt="" />
            <div className={styles.reward_div}>
              <span className={styles.reward_div_span_up}>
                Independent Of The Year
              </span>
              <span className={styles.reward_div_span_bottom}>
                Annual Awards 2020 • awwwards.com
              </span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src={logo5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TheSecond;
