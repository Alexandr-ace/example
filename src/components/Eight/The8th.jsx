import React from "react";
import styles from "./The8th.module.scss";
const logo37 = require("../../snippet/image/image37.png");
const logo38 = require("../../snippet/image/image38.png");
const logo39 = require("../../snippet/image/image39.png");
const logo40 = require("../../snippet/image/image40.png");
const logo41 = require("../../snippet/image/image41.png");

const The8th = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_img}>
          <img src={logo37} alt="" />
        </div>
        <div className={styles.center_text1}>In a rush?</div>
        <div className={styles.center_text2}>Shop ready designs here.</div>
        <div className={styles.center_row}>
          <div className={styles.center_row_avatar}>
            <img src={logo38} alt="" />
            <div className={styles.center_row_avatar_textm}>
              Ergonomic Frozen Pants
            </div>
            <div className={styles.center_row_avatar_texts}>In et consequ</div>
          </div>
          <div className={styles.center_row_avatar}>
            <img src={logo39} alt="" />
            <div className={styles.center_row_avatar_textm}>
              Handmade Fresh Bike
            </div>
            <div className={styles.center_row_avatar_texts}>Qui in facere</div>
          </div>
          <div className={styles.center_row_avatar}>
            <img src={logo40} alt="" />
            <div className={styles.center_row_avatar_textm}>
              Small Soft Pizza
            </div>
            <div className={styles.center_row_avatar_texts}>
              Aspernatur expli
            </div>
          </div>
        </div>
        <div className={styles.center_imgs}>
          <div className={styles.center_imgs_inside}>
            <img src={logo41} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default The8th;
