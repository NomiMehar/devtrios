import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./WebsiteServices.module.scss";
import data from "./WebsiteServicesList.json";

export default function WebsiteServices() {
  return (
    <div className={styles.website_services}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.services_grid}>
            {data.services.map((service, index) => (
              <div key={index} className={styles.service_card}>
                <div className={styles.card_glow}></div>
                <div className={styles.card_background}></div>
                <div className={styles.card_content}>
                  <div className={styles.card_number}>{String(index + 1).padStart(2, '0')}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <Link href={service.link} className={styles.service_link}>
                  <span>{service.linkText}</span>
                  <div className={styles.arrow_wrapper}>
                    <Image
                      src="/assets/images/home/arrow-circle-right.webp"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                </Link>
                <div className={styles.card_accent}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

