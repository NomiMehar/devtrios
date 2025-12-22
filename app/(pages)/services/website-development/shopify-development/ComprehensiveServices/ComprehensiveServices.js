import React from "react";
import styles from "./ComprehensiveServices.module.scss";
import data from "./ComprehensiveServicesList.json";

export default function ComprehensiveServices() {
  return (
    <div className={styles.comprehensive_services}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.services_grid}>
            {data.services.map((service, index) => (
              <div key={index} className={styles.service_card}>
                <div className={styles.card_number}>0{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

