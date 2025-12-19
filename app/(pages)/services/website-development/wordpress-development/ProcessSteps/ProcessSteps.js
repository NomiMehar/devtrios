import React from "react";
import styles from "./ProcessSteps.module.scss";
import data from "./ProcessStepsList.json";

export default function ProcessSteps() {
  return (
    <div className={styles.process_steps}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.process_grid}>
            {data.steps.map((step, index) => (
              <div key={index} className={styles.process_card}>
                <div className={styles.process_number}>{index + 1}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
