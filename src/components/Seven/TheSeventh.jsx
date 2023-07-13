import React from "react";
import styles from "./TheSeventh.module.scss";
const logo32 = require("../../snippet/image/image32.png");
const logo33 = require("../../snippet/image/image33.png");
const logo34 = require("../../snippet/image/image34.png");
const logo35 = require("../../snippet/image/image35.png");
const logo36 = require("../../snippet/image/image36.png");
const TheSeventh = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <div className={styles.center_up}>
          <div className={styles.center_up_left}>
            <img src={logo32} alt="" />
            <div>Getting started is easy.</div>
          </div>
          <div className={styles.center_up_right}>
            <div>
              I've developed a structure that saves time (and money) while
              making the most of our interactions.
            </div>
          </div>
        </div>
        <div className={styles.center_buttom}>
          <div className={styles.center_buttom_row}>
            <div className={styles.center_buttom_row_imgs}>
              <img
                className={styles.center_buttom_row_imgs_1}
                src={logo33}
                alt=""
              />
              <img
                className={styles.center_buttom_row_imgs_2}
                src={logo34}
                alt=""
              />
            </div>
            <div className={styles.center_buttom_row_textm}>Listen</div>
            <div className={styles.center_buttom_row_texts}>
              I get to know you and your company, your goals and expectations.
            </div>
          </div>
          <div className={styles.center_buttom_row}>
            <div className={styles.center_buttom_row_imgs}>
              <img
                className={styles.center_buttom_row_imgs_1}
                src={logo35}
                alt=""
              />
              <img
                className={styles.center_buttom_row_imgs_2}
                src={logo34}
                alt=""
              />
            </div>
            <div className={styles.center_buttom_row_textm}>Ideate</div>
            <div className={styles.center_buttom_row_texts}>
              I create a couple of pitches based on the project brief and goals.
            </div>
          </div>
          <div className={styles.center_buttom_row}>
            <div className={styles.center_buttom_row_imgs}>
              <img
                className={styles.center_buttom_row_imgs_1}
                src={logo36}
                alt=""
              />
            </div>
            <div className={styles.center_buttom_row_textm}>Execute</div>
            <div className={styles.center_buttom_row_textsun}>
              I work on the approved plan while keeping you in the loop until we
              have a finished project.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSeventh;
