import React from "react";
import styles from "./TheThird.module.scss";
const logo6 = require("../../snippet/image/image6.png");
const logo7 = require("../../snippet/image/image7.png");
const logo8 = require("../../snippet/image/image8.png");
const logo9 = require("../../snippet/image/image9.png");
const logo10 = require("../../snippet/image/image10.png");
const logo11 = require("../../snippet/image/image11.png");
const logo12 = require("../../snippet/image/image12.png");

const TheThird = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.left}>
          <img className={styles.left_line1} src={logo6} alt="" />
          <img className={styles.left_line2} src={logo7} alt="" />
          <span className={styles.left_span}>
            Working with Alex was interesting. He went above and beyond what
            I've asking for and provided such an amazing design for my mobile
            application.
          </span>
          <div className={styles.left_div}>
            <img className={styles.left_div_img} src={logo8} alt="" />
            <div className={styles.left_div_div}>
              <span className={styles.left_div_div_span_up}>
                Steve McQuillen
              </span>
              <span className={styles.left_div_div_span_bottom}>
                CEO @ Vencortex
              </span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right_div_up}>
            <span>Trusted by the fastest growing digital startups</span>
          </div>
          <div className={styles.right_div_miidle}>
            <div className={styles.right_div_miidle_1}>
              <span className={styles.right_div_miidle_1_span_up}>7+</span>
              <span className={styles.right_div_miidle_1_span_bottom}>
                Years of experience
              </span>
            </div>
            <div className={styles.right_div_miidle_1}>
              <span className={styles.right_div_miidle_1_span_up}>50+</span>
              <span className={styles.right_div_miidle_1_span_bottom}>
                Projects completed
              </span>
            </div>
            <div className={styles.right_div_miidle_1}>
              <span className={styles.right_div_miidle_1_span_up}>30+</span>
              <span className={styles.right_div_miidle_1_span_bottom}>
                Happy clients
              </span>
            </div>
          </div>
          <div className={styles.right_div_bottom}>
            <img src={logo9} alt="" />
            <img src={logo10} alt="" />
            <img src={logo11} alt="" />
            <img src={logo12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheThird;
