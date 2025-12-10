import React from "react";
import styles from "./DevtriosExperts.module.scss";
import data from "./DevtriosExpertsList.json";
import Button from "@/app/(components)/button/Button";

export default function DevtriosExperts() {
  return (
    <div className={styles.devtrios_experts}>
      <div className="container">
        <div className={styles.heading_wrapper}>
          <h2>{data.heading.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: data.heading.description }} />
          <Button href="/contact-us">Talk to a Specialist</Button>
        </div>

        <div className={styles.content_wrapper}>
          {data.values.map((item, index) => (
            <div
              className={styles.block}
              style={{ backgroundImage: `url(${item.background})` }}
              key={index}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
