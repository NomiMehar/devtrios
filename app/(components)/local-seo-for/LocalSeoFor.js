"use client";

import React from "react";
import Image from "next/image";
import styles from "./LocalSeoFor.module.scss";

const ITEMS = [
  "You rely on local customers or service areas",
  "You are not showing in Google Maps consistently",
  "Competitors dominate local results",
  "You have multiple locations or expansion plans",
  "Your website traffic exists but calls do not",
];

export default function LocalSeoFor() {
  return (
    <section className={styles.local_seo_for}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>Who Local SEO Is For</h2>
          <p className={styles.subtitle}>This service is ideal if:</p>
        </div>

        <div className={styles.diagram}>
          <div className={styles.circle_wrapper}>
            <div className={styles.circle_outer}>
              <div className={styles.circle_track} />
              <div className={styles.circle_dotted} />
              <div className={styles.circle_inner}>
                <Image
                  src="/assets/images/services/seo-for.png"
                  alt="Local SEO illustration"
                  width={260}
                  height={260}
                  className={styles.center_image}
                />
              </div>
            </div>
          </div>

          {ITEMS.map((text, index) => (
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
