import React from "react";
import styles from "./TheNinth.module.scss";
const logo42 = require("../../snippet/image/image42.png");
const logo43 = require("../../snippet/image/image43.png");
const logo44 = require("../../snippet/image/image44.png");
const logo45 = require("../../snippet/image/image45.png");
const logo46 = require("../../snippet/image/image46.png");
const logo47 = require("../../snippet/image/image47.png");
const TheNinth = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <img className={styles.center_img} src={logo42} alt="" />
        <div className={styles.center_text}>
          <div className={styles.center_text_left}>
            Words On Design, Tech & Other Things I Love
          </div>
          <div className={styles.center_text_right}>
            <span>Explore all posts</span>
            <img src={logo43} alt="" />
          </div>
        </div>
        <div className={styles.center_column}>
          <div className={styles.center_column_inside}>
            <div className={styles.center_column_inside_img}>
              <img src={logo44} alt="" />
            </div>
            <div className={styles.center_column_inside_text}>
              <div className={styles.center_column_inside_text_m}>
                DESIGN • 6 OCT, 2021
              </div>
              <div className={styles.center_column_inside_text_l}>
                On our obsession with circles
              </div>
              <div className={styles.center_column_inside_text_s}>
                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                laoreet. Nulla facilisi.
              </div>
            </div>
            <div className={styles.center_column_inside_arrow}>
              <img src={logo45} alt="" />
            </div>
          </div>
          <div className={styles.center_column_inside}>
            <div className={styles.center_column_inside_img}>
              <img src={logo46} alt="" />
            </div>
            <div className={styles.center_column_inside_text}>
              <div className={styles.center_column_inside_text_m}>
                DESIGN • 6 OCT, 2021
              </div>
              <div className={styles.center_column_inside_text_l}>
                From bullet points to Yayoi Kusama— On our obsession with
                circless
              </div>
              <div className={styles.center_column_inside_text_s}>
                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                laoreet. Nulla facilisi.
              </div>
            </div>
            <div className={styles.center_column_inside_arrow}>
              <img src={logo45} alt="" />
            </div>
          </div>
          <div className={styles.center_column_inside}>
            <div className={styles.center_column_inside_img}>
              <img src={logo47} alt="" />
            </div>
            <div className={styles.center_column_inside_text}>
              <div className={styles.center_column_inside_text_m}>
                DESIGN • 6 OCT, 2021
              </div>
              <div className={styles.center_column_inside_text_l}>
                It's a jungle out there for gig workers
              </div>
              <div className={styles.center_column_inside_text_s}>
                Vivamus mattis eu odio non aliquam. Vestibulum tristique congue
                laoreet. Nulla facilisi.
              </div>
            </div>
            <div className={styles.center_column_inside_arrow}>
              <img src={logo45} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheNinth;
