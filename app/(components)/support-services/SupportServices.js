import React from "react";
import Image from "next/image";
import styles from "./SupportServices.module.scss";
import data from "./SupportServicesList.json";

export default function SupportServices({ type }) {
  const supportData = data[type];

  if (!supportData) {
    return null;
  }

  const servicesCount = supportData.services.length;
  let gridClass;
  
  if (type === "shopify_development") {
    gridClass = styles.grid_2;
  } else if (servicesCount === 3) {
    gridClass = styles.grid_3;
  } else {
    gridClass = styles.grid_4;
  }

  return (
    <div className={styles.support_services}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{supportData.heading.title}</h2>
            <p>{supportData.heading.description}</p>
          </div>

          <div className={`${styles.support_grid} ${gridClass}`}>
            {supportData.services.map((service, index) => (
              <div
                key={index}
                className={styles.support_card}
                style={{ backgroundImage: `url(${service.backgroundImg})` }}
              >
                <div className={styles.support_icon}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                  />
                </div>
                <div className={styles.support_content}>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

