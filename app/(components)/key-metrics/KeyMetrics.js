import React from "react";
import styles from "./KeyMetrics.module.scss";
import Button from "@/app/(components)/button/Button";

const metrics = [
  { value: "16+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "30+", label: "Team of Experts" },
  { value: "20+", label: "Tech Stacks" },
];

export default function KeyMetrics() {
  return (
    <section className={styles.key_metrics}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.left}>
            <span className={styles.sub_heading}>
              WHY BUSINESSES TRUST DEVTRIOS
            </span>
            <h2 className={styles.heading}>
              From startups to enterprises, across 16+ industries
            </h2>

            <Button href="/contact-us">See How We Work</Button>
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
