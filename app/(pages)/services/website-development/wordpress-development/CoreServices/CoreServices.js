import React from "react";
import Image from "next/image";
import styles from "./CoreServices.module.scss";
import data from "./CoreServicesList.json";
import Button from "@/app/(components)/button/Button";

export default function CoreServices() {
  return (
    <div className={styles.core_services}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.services_list}>
            {data.services.map((service, index) => (
              <div key={index} className={styles.service_item}>
                <div className={styles.left_panel}>
                  <div className={styles.number_display}>
                    <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <div className={styles.right_panel}>
                  <div className={styles.content_wrapper}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className={styles.accent_line}></div>
                </div>
              </div>
            ))}
          </div>

          {data.cta && (
            <div className={styles.cta_section}>
              <Button href={data.cta.href} icon={data.cta.icon}>
                {data.cta.text}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

