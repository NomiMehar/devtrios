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

          <div className={styles.services_container}>
            {data.services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`${styles.service_item} ${isEven ? styles.left_align : styles.right_align}`}>
                  <div className={styles.content_box}>
                    <div className={styles.number_section}>
                      <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className={styles.text_content}>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                  <div className={styles.icon_box}>
                    <div className={styles.icon_wrapper}>
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
