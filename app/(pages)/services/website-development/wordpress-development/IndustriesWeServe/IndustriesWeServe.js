import React from "react";
import styles from "./IndustriesWeServe.module.scss";
import data from "./IndustriesWeServeList.json";

export default function IndustriesWeServe() {
  return (
    <div className={styles.industries_we_serve}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.industries_container}>
            {data.industries.map((industry, index) => (
              <div key={index} className={styles.industry_item}>
                <div className={styles.industry_badge}>
                  <span className={styles.badge_number}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className={styles.industry_content}>
                  <h4>{industry.title}</h4>
                  <p>{industry.description}</p>
                </div>
                <div className={styles.hover_effect}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

