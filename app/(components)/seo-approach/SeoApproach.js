"use client";

import React, { useState } from "react";
import Button from "@/app/(components)/button/Button";
import styles from "./SeoApproach.module.scss";
import data from "./SeoApproachList.json";

export default function SeoApproach({ sectionKey = "technical_seo" }) {
  const section = data[sectionKey];
  const steps = section?.steps || [];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.seo_approach}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.left_column}>
            <div className={styles.left_inner}>
              <h2 className={styles.heading}>{section.heading}</h2>
              <p className={styles.subtitle}>{section.subtitle}</p>

              <div className={styles.browser_mock}>
                <div className={styles.browser_header}>
                  <span className={`${styles.dot} ${styles.dot_red}`} />
                  <span className={`${styles.dot} ${styles.dot_yellow}`} />
                  <span className={`${styles.dot} ${styles.dot_green}`} />
                </div>
                <div className={styles.browser_body}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className={styles.browser_row}>
                      <div className={styles.browser_row_title} />
                      <div className={styles.browser_row_meta} />
                      <div className={styles.browser_row_cta} />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.left_cta}>
                <Button href="/get-a-quote" icon="/assets/images/icons/thunder.svg">Get a Free Consultation</Button>
              </div>
            </div>
          </div>

          <div className={styles.right_column}>
            <div className={styles.cards_column}>
              {steps.map((step, index) => {
                const isActive = index === activeIndex;
                return (
                  <article
                    key={step.title}
                    data-index={index}
                    className={`${styles.card} ${
                      isActive ? styles.card_active : ""
                    }`}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div className={styles.card_content}>
                      <h3 className={styles.card_title}>{step.title}</h3>
                      <p className={styles.card_description}>
                        {step.description}
                      </p>
                    </div>
                    <span
                      className={`${styles.card_dot} ${
                        isActive ? styles.card_dot_active : ""
                      }`}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

