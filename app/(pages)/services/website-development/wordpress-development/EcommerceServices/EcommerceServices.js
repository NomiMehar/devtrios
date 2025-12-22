import React from "react";
import styles from "./EcommerceServices.module.scss";
import data from "./EcommerceServicesList.json";

export default function EcommerceServices() {
  return (
    <div className={styles.ecommerce_services}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.services_grid}>
            {data.services.map((service, index) => (
              <div 
                key={index} 
                className={`${styles.service_card} ${styles[`card_${index + 1}`]}`}
              >
                <div className={styles.card_background}></div>
                <div className={styles.card_content}>
                  <div className={styles.card_number}>0{index + 1}</div>
                  <div className={styles.card_header}>
                    <h3>{service.title}</h3>
                    <div className={styles.card_underline}></div>
                  </div>
                  <p>{service.description}</p>
                </div>
                <div className={styles.card_glow}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

