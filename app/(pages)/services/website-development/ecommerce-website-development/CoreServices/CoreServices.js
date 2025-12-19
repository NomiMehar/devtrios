import React from "react";
import Image from "next/image";
import styles from "./CoreServices.module.scss";
import data from "./CoreServicesList.json";

export default function CoreServices() {
  return (
    <div className={styles.core_services}>
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
                className={styles.service_card}
                style={{ backgroundImage: `url(${service.backgroundImg})` }}
              >
                <div className={styles.icon_wrapper}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.card_content}>
                  <h3>{service.title}</h3>
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
