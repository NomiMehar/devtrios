"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./SoftwareDevelopmentServicesFor.module.scss";
import dataMap from "./SoftwareDevelopmentServicesForList.json";

export default function SoftwareDevelopmentServicesFor({
  type = "web_app_development",
}) {
  const data = dataMap[type] || dataMap.web_app_development;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!data) {
    return null;
  }

  const items = data.items || [];

  return (
    <section className={styles.software_dev_services_for}>
      <div className="container">
        <div className={styles.section_header}>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className={styles.cards_wrapper}>
          <div className={styles.cards_row}>
            {items.map((item, index) => (
              <div key={`item-${index}`} className={styles.item_wrapper}>
                <div
                  className={`${styles.icon_container} ${
                    hoveredIndex === index ? styles.icon_active : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>
                <article
                  className={`${styles.card} ${
                    hoveredIndex === index ? styles.card_hovered : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <h3 className={styles.card_title}>{item.title}</h3>
                  <p className={styles.card_desc}>{item.description}</p>
                  <span className={styles.card_number}>{item.number}</span>
                </article>
              </div>
            ))}
          </div>
        </div>

        {data.closingText && (
          <p className={styles.closing_text}>{data.closingText}</p>
        )}
      </div>
    </section>
  );
}

