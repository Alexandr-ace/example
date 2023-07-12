import React from "react";
import styles from "./TheFifth.module.scss";
const logo21 = require("../../snippet/image/image21.png");
const logo22 = require("../../snippet/image/image22.png");
const logo23 = require("../../snippet/image/image23.png");
const logo24 = require("../../snippet/image/image24.png");
const logo25 = require("../../snippet/image/image25.png");

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
        <div className={styles.bottom}>
          <div className={styles.top3}>
            <img className={styles.top3_img} src={logo24} alt="" />
            <div className={styles.top3_text}>Memorabilia</div>
            <div className={styles.top3_textx}>
              Choose from easy, affordable options for merch like custom tees
              and sets of pins.
            </div>
          </div>
          <div className={`${styles.top3} ${styles.top3_left} `}>
            <img className={styles.top3_img} src={logo25} alt="" />
            <div className={styles.top3_text}>Visual Aids</div>
            <div className={styles.top3_textx}>
              Make your point more convincingly with branded flyers, slides,
              catalogues, infographics.
            </div>
          </div>
          <div className={`${styles.bottom_push} ${styles.bottom_push_right}`}>
            Start a project
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFifth;
