"use client";

import React from "react";
import Image from "next/image";
import styles from "./BlockchainDevelopmentServices.module.scss";

export default function BlockchainDevelopmentServices({ data }) {
  const { heading, description, services } = data;

  return (
    <section className={styles.blockchain_development_services}>
      <div className="container">
        <div className={styles.grid_layout}>

          {/* LEFT STICKY COLUMN */}
          <div className={styles.left_content}>
            <div className={styles.section_header}>
              <h2 className={styles.heading}>{heading}</h2>
              <p className={styles.description}>{description}</p>
            </div>
          </div>

          {/* RIGHT SCROLLABLE SERVICES */}
          <div className={styles.right_content}>
            <div className={styles.services_list}>
              {services.map((service, index) => (
                <div className={styles.service_card} key={index}>
                  <div className={styles.service_icon}>
                    {/* dummy icon */}
                    <Image src={service.icon} alt={service.title} width={40} height={40} />
                  </div>

                  <h3 className={styles.service_title}>{service.title}</h3>
                  <p className={styles.service_description}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}