"use client";

import React from "react";
import styles from "./SoftwareDevelopmentProcess.module.scss";
import dataMap from "./SoftwareDevelopmentProcessList.json";

export default function SoftwareDevelopmentProcess({
  type = "web_app_development",
}) {
  const data = dataMap[type] || dataMap.web_app_development;

  if (!data) {
    return null;
  }

  const steps = data.steps || [];

  return (
    <section className={styles.software_dev_process}>
      <div className="container">
        <div className={styles.section_header}>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => {
            return (
              <article key={step.title} className={styles.step_card}>
                <span className={styles.step_badge}>{step.number}</span>
                <h3 className={styles.step_title}>{step.title}</h3>
                <p className={styles.step_desc}>{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

