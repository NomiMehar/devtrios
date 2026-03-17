"use client";

import React from "react";
import Image from "next/image";
import styles from "./TechnicalSeoFor.module.scss";
import data from "./SeoForList.json";

export default function TechnicalSeoFor({ sectionKey = "technical_seo" }) {
  const section = data[sectionKey];
  if (!section?.items?.length) return null;

  const items = section.items;

  return (
    <section className={styles.technical_seo_for}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <p className={styles.subtitle}>{section.subtitle}</p>
        </div>

        <div className={styles.diagram}>
          <div className={styles.circle_wrapper}>
            <div className={styles.circle_outer}>
              <div className={styles.circle_track} />
              <div className={styles.circle_dotted} />
              <div className={styles.circle_inner}>
                <Image
                  src="/assets/images/services/seo-for.png"
                  alt=""
                  width={260}
                  height={260}
                  className={styles.center_image}
                />
              </div>
            </div>
          </div>

          {items.map((text, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card_${index + 1}`]}`}
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
