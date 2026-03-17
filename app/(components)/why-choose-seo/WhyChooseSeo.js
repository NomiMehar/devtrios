"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhyChooseSeo.module.scss";
import data from "./WhyChooseSeoList.json";

export default function WhyChooseSeo({ sectionKey = "technical_seo" }) {
  const section = data[sectionKey];
  if (!section?.cards?.length) return null;

  const cards = section.cards;
  const leftCards = cards.slice(0, 3);
  const rightCards = cards.slice(3, 5);

  return (
    <section className={styles.why_choose_seo}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <p className={styles.description}>{section.description}</p>
        </div>

        <div className={styles.content_wrapper}>
          <div className={styles.cards_column_left}>
            {leftCards.map((text, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.card_icon} />
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className={styles.center_image_wrapper}>
            <Image
              src={section.image}
              alt={section.imageAlt || "Why Choose Devtrios for Technical SEO"}
              width={320}
              height={320}
              className={styles.center_image}
            />
          </div>

          <div className={styles.cards_column_right}>
            {rightCards.map((text, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.card_icon} />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
