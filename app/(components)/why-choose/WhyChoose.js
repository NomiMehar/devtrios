import React from "react";
import styles from "./WhyChoose.module.scss";

export default function WhyChoose({ data }) {
  return (
    <section className={styles.why_choose}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.heading_block}>
            <h2>{data.heading}</h2>
            <p>{data.description}</p>
          </div>

          <ul className={styles.features_list}>
            {data.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <p className={styles.closing_text}>{data.closingText}</p>
        </div>
      </div>
    </section>
  );
}

