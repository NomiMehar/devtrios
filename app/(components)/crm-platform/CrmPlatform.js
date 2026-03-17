"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./CrmPlatform.module.scss";

export default function CrmPlatform({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  if (!data || !data.items) {
    return null;
  }

  const currentItem = data.items[hoveredIndex];
  const currentImage = currentItem.hoverImage || currentItem.image;

  return (
    <section className={styles.crm_platform}>
      <div className="container">
            <div className={styles.section_header}>
              <h2 className={styles.heading}>{data.heading}</h2>
              <p className={styles.description}>{data.description}</p>
            </div>
        <div className={styles.content_wrapper}>
          <div className={styles.content_list}>

            <div className={styles.items_container}>
              {data.items.map((item, index) => {
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    className={`${styles.item_card} ${isHovered ? styles.active : ""}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <div className={styles.checkmark_icon}>
                      <Image
                        src="/assets/images/services/automation-service-icon.svg"
                        alt="checkmark"
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className={styles.item_text}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.image_section}>
            <div className={styles.image_wrapper}>
              <Image
                key={currentImage}
                src={currentImage}
                alt="AI Chatbot Services"
                width={1000}
                height={1000}
                loading="lazy"
                className={styles.main_image}
              />
            </div>
          </div>
        </div>
        {data.closingText && (
              <p className={styles.closing_text}>{data.closingText}</p>
            )}
      </div>
    </section>
  );
}
