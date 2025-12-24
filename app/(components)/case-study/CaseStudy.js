import React from "react";
import styles from "./CaseStudy.module.scss";

export default function CaseStudy({ data }) {
  return (
    <section className={styles.case_study}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.heading_wrapper}>
            <h2>{data.heading}</h2>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>

          <div className={styles.case_content}>
            <div className={styles.client_info}>
              <h3>{data.client}</h3>
              <p className={styles.client_description}>{data.clientDescription}</p>
            </div>

            <div className={styles.challenge_section}>
              <h4>Challenge:</h4>
              <p>{data.challenge}</p>
            </div>

            <div className={styles.solution_section}>
              <h4>Solution:</h4>
              <p>{data.solution}</p>
            </div>

            <div className={styles.outcome_section}>
              <h4>Outcome:</h4>
              <ul>
                {data.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            <p className={styles.closing_text}>{data.closingText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

