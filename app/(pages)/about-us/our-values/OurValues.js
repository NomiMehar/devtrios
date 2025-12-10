import React from "react";
import styles from "./OurValues.module.scss";
import data from "./OurValuesList.json";

export default function OurValues() {
  return (
    <div className={styles.our_values}>
      <div className="container">
        <div className={styles.heading_wrapper}>
          <h2>{data.heading.title}</h2>
          <p>{data.heading.description}</p>
        </div>

        <div className={styles.content_wrapper}>
          {data.values.map((item, index) => (
            <div className={styles.block} key={index}>
              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
