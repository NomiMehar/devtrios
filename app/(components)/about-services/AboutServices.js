"use client";

import React from "react";
import Image from "next/image";
import styles from "./AboutServices.module.scss";
import aboutServicesData from "./AboutServicesList.json";

export default function AboutServices({ type = "mobile_app" }) {
  const data = aboutServicesData[type];
  if (!data) return null;

  const { title, description, image, stats } = data;

  return (
    <section className={styles.about_services}>
      <div className="container">
        <div className={styles.layout}>
          {/* Image */}
          <div className={styles.image_wrapper}>
            <Image
              src={image}
              alt={title}
              width={1000}
              height={1000}
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className={styles.content}>
            <div className={styles.text_block}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              {stats.map((item, index) => (
                <div key={index} className={styles.stat_item}>
                  <span className={styles.stat_value}>{item.value}</span>
                  <p className={styles.stat_label}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
