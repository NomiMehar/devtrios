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
          </div>

          <div className={styles.services_list}>
            {data.services.map((service, index) => (
              <div key={index} className={styles.service_item}>
                <div className={styles.left_panel}>
                  <div className={styles.number_display}>
                    <span className={styles.number}>
                      <Image
                      src={service.backgroundImg}
                      alt="number"
                      width={1000}
                      height={1000}
                    />
                    </span>
                  </div>
                </div>
                <div className={styles.right_panel}>
                  <div className={styles.content_wrapper}>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

