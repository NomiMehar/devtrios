import React from "react";
import styles from "./EnterpriseSolutions.module.scss";
import data from "./EnterpriseSolutionsList.json";

export default function EnterpriseSolutions() {
  return (
    <div className={styles.enterprise_solutions}>
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

            <div className={styles.highlight_card}>
              <div className={styles.highlight_badge}>Key Benefit</div>
              <p className={styles.highlight_text}>{data.content.highlight}</p>
              <div className={styles.highlight_gradient}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

