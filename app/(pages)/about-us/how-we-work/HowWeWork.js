import React from "react";
import styles from "./HowWeWork.module.scss";
import data from "./HowWeWorkList.json";

export default function HowWeWork() {
  return (
    <div className={styles.how_we_work}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading_wrapper}>
            <h2>{data.heading.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.heading.description }} />
          </div>
          <div className={styles.content_wrapper}>
            {data.values.map((item, index) => (
              <div className={styles.block} key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
