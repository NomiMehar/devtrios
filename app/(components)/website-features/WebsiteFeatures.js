import React from "react";
import styles from "./WebsiteFeatures.module.scss";
import data from "./WebsiteFeaturesList.json";

export default function WebsiteFeatures() {
  const gradients = [
    "linear-gradient(135deg, #0045ff 0%, #0065ff 100%)",
    "linear-gradient(135deg, #0065ff 0%, #00a3ff 100%)",
    "linear-gradient(135deg, #00a3ff 0%, #00c3ff 100%)",
    "linear-gradient(135deg, #00c3ff 0%, #00e3ff 100%)"
  ];

  return (
    <div className={styles.website_features}>
      <div className="container">
        <div className={styles.features_wrapper}>
          {data.features.map((feature, index) => (
            <div key={index} className={styles.feature_item} style={{ '--gradient': gradients[index] }}>
              <div className={styles.card_background}></div>
              <div className={styles.card_glow}></div>
              <div className={styles.card_content}>
                <div className={styles.icon_container}>
                  <div className={styles.icon_wrapper}>
                    <div className={styles.icon_background}></div>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.icon_pulse}></div>
                </div>
                <h3 className={styles.feature_text}>{feature}</h3>
              </div>
              <div className={styles.card_shine}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

