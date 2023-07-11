import React from "react";
import styles from "./TheFifth.module.scss";
const logo21 = require("../../snippet/image/image21.png");
const logo22 = require("../../snippet/image/image22.png");
const logo23 = require("../../snippet/image/image23.png");

const TheFifth = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.top}>
          <div className={styles.top1}>
            <img src={logo21} alt="" />
            <span className={styles.top1_text}>
              Pushing the boundaries of your potential
            </span>
          </div>
          <div className={styles.top2}>
            <img className={styles.top2_img} src={logo22} alt="" />
            <div className={styles.top2_text}>Branding</div>
            <div className={styles.top2_textx}>
              Refresh your logo, revamp your website, and even your letterhead
              develop a cohesive aesthetic for your brand.
            </div>
          </div>
          <div className={styles.top3}>
            <img className={styles.top3_img} src={logo23} alt="" />
            <div className={styles.top3_text}>Packaging</div>
            <div className={styles.top3_textx}>
              Rethink labels, boxes, signage, and everything that'll help your
              product make a great first impression.
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
};

export default TheFifth;
