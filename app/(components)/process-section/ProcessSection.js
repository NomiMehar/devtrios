import React from "react";
import styles from "./ProcessSection.module.scss";

export default function ProcessSection({ data }) {
  return (
    <section className={styles.process_section}>
      <div className="container">
        <div className={styles.heading_wrapper}>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className={styles.steps_grid}>
          {data.steps.map((step, index) => (
            <div key={index} className={styles.step_card}>
              <div className={styles.step_number}>
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

