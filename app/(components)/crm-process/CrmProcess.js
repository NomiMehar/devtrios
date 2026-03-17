"use client";

import React, { useState } from "react";
import Button from "@/app/(components)/button/Button";
import styles from "./CrmProcess.module.scss";
import data from "./CrmProcessList.json";

export default function CrmProcess({ sectionKey = "crm_process" }) {
  const section = data[sectionKey];
  if (!section || !section.steps?.length) return null;

  const { heading, subtitle, steps, cta } = section;
  const [activeIndex, setActiveIndex] = useState(0);
  const active = steps[activeIndex];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.header}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          <div className={styles.tabs_row}>
            {steps.map((step, index) => (
              <button
                key={step.label}
                type="button"
                className={`${styles.tab} ${
                  index === activeIndex ? styles.tab_active : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className={styles.tab_label}>{step.label}</span>
                <span className={styles.tab_circle}>{index + 1}</span>
              </button>
            ))}
          </div>

          <div className={styles.panel}>
            <h3 className={styles.panel_title}>{active.title}</h3>
            <p className={styles.panel_text}>{active.description}</p>
            {cta && (
              <div className={styles.panel_cta}>
                <Button href={cta.href} icon={cta.icon}>
                  {cta.text}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

