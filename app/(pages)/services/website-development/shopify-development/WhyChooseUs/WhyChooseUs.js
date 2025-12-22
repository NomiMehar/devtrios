import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.scss";
import data from "./WhyChooseUsList.json";

export default function WhyChooseUs() {
  const icons = [
    "/assets/images/services/web-dev-expertise-1.svg",
    "/assets/images/services/web-dev-expertise-2.svg",
    "/assets/images/services/web-dev-expertise-3.svg"
  ];

  return (
    <div className={styles.why_choose_us}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
          </div>

          <div className={styles.content_section}>
            {data.content.map((paragraph, index) => (
              <div key={index} className={styles.content_card}>
                <div className={styles.card_icon}>
                  <Image
                    src={icons[index] || icons[0]}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.card_content}>
                  <p className={styles.content_paragraph}>{paragraph}</p>
                </div>
                <div className={styles.card_accent}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

