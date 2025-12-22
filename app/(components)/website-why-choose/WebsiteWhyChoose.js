import React from "react";
import styles from "./WebsiteWhyChoose.module.scss";
import data from "./WebsiteWhyChooseList.json";

export default function WebsiteWhyChoose() {
  return (
    <div className={styles.website_why_choose}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.features_grid}>
            {data.features.map((feature, index) => (
              <div key={index} className={styles.feature_card}>
                <div className={styles.card_glow}></div>
                <div className={styles.feature_icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className={styles.feature_text}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

