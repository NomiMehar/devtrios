"use client";

import React from "react";
import styles from "./KeyMetrics.module.scss";
import Button from "@/app/(components)/button/Button";
import KeyMetricsData from "./KeyMetricsList.json";

export default function KeyMetrics({ type = "home" }) {
  const data = KeyMetricsData[type] || {};
  const { subHeading, heading, button, metrics = [] } = data;

  return (
    <section className={styles.key_metrics}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.left}>
            <span className={styles.sub_heading}>{subHeading}</span>
            <h2 className={styles.heading}>{heading}</h2>

            {button && <Button href={button.href}>{button.label}</Button>}
          </div>

          <div className={styles.right}>
            {metrics.map((item, index) => (
              <div key={index} className={styles.metric_box}>
                <span className={styles.value}>{item.value}</span>
                <span className={styles.label}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
