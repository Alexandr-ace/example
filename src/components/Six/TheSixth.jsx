import React from "react";
import styles from "./TheSixth.module.scss";
const logo26 = require("../../snippet/image/image26.png");
const logo27 = require("../../snippet/image/image27.png");
const logo28 = require("../../snippet/image/image8.png");

const TheSixth = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_img}>
          <img src={logo26} alt="" />
        </div>
        <div className={styles.center_span}>
          <div>Hear it directly from </div>
          <div> my clients.</div>
        </div>
        <div className={styles.center_names}>
          <div className={styles.avatar}>
            <div className={styles.avatar_img}>
              <img src={logo27} alt="" />
            </div>
            <div className={styles.avatar_stext}>Highly professional</div>
            <div className={styles.avatar_mtext}>
              Alex was in control throughout the project. They delivered on the
              promised deadlines and we love the work they did!
            </div>
            <div className={styles.avatar_div}>
              <img className={styles.avatar_div_img} src={logo28} alt="" />
              <div className={styles.avatar_div_div}>
                <span className={styles.avatar_div_div_span_up}>
                  Steve McQuillen
                </span>
                <span className={styles.avatar_div_div_span_bottom}>
                  CEO @ Vencortex
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSixth;
