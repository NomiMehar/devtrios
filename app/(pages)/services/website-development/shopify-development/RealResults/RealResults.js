import React from "react";
import styles from "./RealResults.module.scss";
import data from "./RealResultsList.json";

export default function RealResults() {
  return (
    <div className={styles.real_results}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.main_content}>
              <div className={styles.content_text}>
                <p className={styles.description}>{data.content.description}</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

