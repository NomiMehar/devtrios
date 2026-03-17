"use client";

import React from "react";
import Image from "next/image";
import styles from "./SeoAuditFor.module.scss";

const ITEMS = [
  "Rankings have stalled or declined",
  "Traffic exists but conversions are weak",
  "You are planning a redesign or migration",
  "You want to scale SEO but lack clarity",
  "You suspect technical or structural issues",
  "You want an honest second opinion",
];

export default function SeoAuditFor() {
  return (
    <section className={styles.seo_audit_for}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>Who This SEO Audit Is For</h2>
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
                  alt="SEO Audit illustration"
                  width={260}
                  height={260}
                  className={styles.center_image}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.card_1}`}>
            <p>{ITEMS[0]}</p>
          </div>
          <div className={`${styles.card} ${styles.card_2}`}>
            <p>{ITEMS[1]}</p>
          </div>
          <div className={`${styles.card} ${styles.card_3}`}>
            <p>{ITEMS[2]}</p>
          </div>
          <div className={`${styles.card} ${styles.card_4}`}>
            <p>{ITEMS[3]}</p>
          </div>
          <div className={`${styles.card} ${styles.card_5}`}>
            <p>{ITEMS[4]}</p>
          </div>
          <div className={`${styles.card} ${styles.card_6}`}>
            <p>{ITEMS[5]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
