import React from "react";
import Image from "next/image";
import styles from "./SupportServices.module.scss";
import data from "./SupportServicesList.json";

export default function SupportServices() {
  return (
    <div className={styles.support_services}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.support_grid}>
            {data.services.map((service, index) => (
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
