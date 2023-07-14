import React from "react";
import styles from "./TheTenth.module.scss";
const logo48 = require("../../snippet/image/image48.png");
const logo50 = require("../../snippet/image/image50.png");

const TheTenth = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_all}>
          <div className={styles.center_all_work}>Work</div>
          <div className={styles.center_all_favor}>
            Favorite projects, award-winning campaigns and more.
          </div>
          <div>
            <img className={styles.center_all_img} src={logo48} alt="" />
          </div>
        </div>
        <div className={`${styles.center_all} ${styles.center_alls}`}>
          <div className={styles.center_all_work}>About</div>
          <div className={styles.center_all_favor}>
            My journey, career highlights and everything else you need to know.
          </div>
          <div>
            <img className={styles.center_all_img} src={logo50} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTenth;
