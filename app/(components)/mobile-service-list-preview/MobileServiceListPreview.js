"use client";

import React, { useState } from "react";
import styles from "./MobileServiceListPreview.module.scss";
import Image from "next/image";

export default function MobileServiceListPreview({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.services || data.services.length === 0) {
    return null;
  }

  return (
    <section className={styles.mobile_service_list_preview}>
      <div className="container">
        <div className={styles.content_wrapper}>
          {/* Left Column - Services List */}
          <div className={styles.left_column}>
            <div className={styles.heading_wrapper}>
              <h2>{data.heading}</h2>
              <p>{data.description}</p>
            </div>

            <ul className={styles.services_list}>
              {data.services.map((service, index) => (
                <li
                  key={index}
                  className={`${styles.service_item} ${activeIndex === index ? styles.active : ""}`}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span className={styles.service_number}>{service.number}</span>
                  <div className={styles.service_content}>
                    <h3 className={styles.service_title}>{service.title}</h3>
                    <p className={styles.service_description}>{service.description}</p>
                  </div>
                  <div className={styles.arrow_wrapper}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.arrow}
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className={styles.right_column}>
            <div className={styles.image_wrapper}>
              <div className={styles.image_container}>
                <Image
                  key={activeIndex}
                  src={data.services[activeIndex].image}
                  alt={data.services[activeIndex].title}
                  width={500}
                  height={800}
                  className={styles.service_image}
                  priority
                />
              </div>
              <p className={styles.image_description}>
                {data.services[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
