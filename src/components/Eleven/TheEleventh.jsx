import React from "react";
import styles from "./TheEleventh.module.scss";
const logo51 = require("../../snippet/image/image51.png");

const TheEleventh = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_img}>
          <img src={logo51} alt="" />
        </div>
        <div className={styles.center_text}>
          Have something in mind? Let's connect. Have something in mind?
        </div>
        <div className={styles.center_info}>
          <div className={styles.center_info_1}>
            <div>alexsmith@example.com</div>
          </div>
          <div className={styles.center_info_2}>
            <div className={styles.center_info_2_text}>Work</div>
            <div className={styles.center_info_2_text}>About</div>
            <div className={styles.center_info_2_text}>Shop</div>
            <div className={styles.center_info_2_text}>Blog</div>
            <div className={styles.center_info_2_text}>Contact</div>
          </div>
          <div className={styles.center_info_2}>
            <div className={styles.center_info_2_text}>Twitter</div>
            <div className={styles.center_info_2_text}>LinkedIn</div>
            <div className={styles.center_info_2_text}>Behance</div>
            <div className={styles.center_info_2_text}>GitHub</div>
            <div className={styles.center_info_2_text}>Dribbble</div>
          </div>
          <div className={styles.center_info_3}>
            <div>Subscribe to my weekly newsletter</div>
            <div className={styles.center_info_3_form}>
              <form action="">
                <input placeholder="example@mail.ru" type="text" />
                <button>Отправить</button>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.center_finish}>
          <div>© Template by Sumit Hegde - Powered by Webflow</div>
          <div className={styles.center_finish_margin}>
            <div>Style Guide /</div>
            <div>Licenses /</div>
            <div>Instructions /</div>
            <div>Change Log</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheEleventh;
