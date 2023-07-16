import React from "react";
import styles from "./TheFourth.module.scss";
const logo13 = require("../../snippet/image/image13.png");
const logo14 = require("../../snippet/image/image14.png");
const logo15 = require("../../snippet/image/image15.png");
const logo16 = require("../../snippet/image/image16.png");
const logo17 = require("../../snippet/image/image17.png");
const logo18 = require("../../snippet/image/image18.png");
const logo19 = require("../../snippet/image/image19.png");
const logo20 = require("../../snippet/image/image20.png");

const TheFourth = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_1}>
          <img className={styles.center_1_img} src={logo13} alt="" />
          <div className={styles.center_1_text}>
            Bringing stellar results for every client.
          </div>
        </div>
        <div className={styles.center_2}>
          <div className={styles.center_2_left}>
            <img src={logo14} alt="" />
            <div className={styles.center_2_left_img}>
              <div>Maize Website Design</div>
              <img src={logo15} alt="" />
            </div>
            <div className={styles.center_2_left_text}>
              Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
              laoreet. Nulla facilisi.
            </div>
          </div>
          <div className={styles.center_2_right}>
            <img src={logo16} alt="" />
            <div className={styles.center_2_right_img}>
              <div>Maize Website Design</div>
              <img src={logo15} alt="" />
            </div>
            <div className={styles.center_2_right_text}>
              Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
              laoreet. Nulla facilisi.
            </div>
          </div>
        </div>
        <div className={styles.center_3}>
          <div className={styles.center_3_center}>
            <img src={logo17} alt="" />
            <div className={styles.center_3_center_img}>
              <div>Maize Website Design</div>
              <img src={logo15} alt="" />
            </div>
            <div className={styles.center_3_center_text}>
              Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
              laoreet. Nulla facilisi.
            </div>
          </div>
        </div>
        <div className={styles.center_4}>
          <div className={styles.center_4_left}>
            <img src={logo18} alt="" />
            <div className={styles.center_4_left_img}>
              <div>Maize Website Design</div>
              <img src={logo15} alt="" />
            </div>
            <div className={styles.center_4_left_text}>
              Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
              laoreet. Nulla facilisi.
            </div>
          </div>
          <div className={styles.center_4_right}>
            <img src={logo19} alt="" />
            <div className={styles.center_4_right_img}>
              <div>Maize Website Design</div>
              <img src={logo15} alt="" />
            </div>
            <div className={styles.center_4_right_text}>
              Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
              laoreet. Nulla facilisi.
            </div>
            <img className={styles.center_4_right_imgx} src={logo20} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheFourth;
