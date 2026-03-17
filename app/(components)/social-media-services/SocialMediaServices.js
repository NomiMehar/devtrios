"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import styles from "./SocialMediaServices.module.scss";
import data from "./SocialMediaServicesList.json";

export default function SocialMediaServices({ sectionKey = "social_media_marketing" }) {
  const section = data[sectionKey] || data.social_media_marketing;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!section || !section.services || section.services.length === 0) {
    return null;
  }

  const active = section.services[activeIndex];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <p className={styles.subtitle}>{section.subtitle}</p>
        </div>

        <div className={styles.card}>
          <div className={styles.tabs_bar}>
            <div className={styles.tabs_inner}>
              {section.services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={service.title}
                    type="button"
                    className={`${styles.tab} ${
                      isActive ? styles.tab_active : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {service.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.text_column}>
              <h3 className={styles.service_title}>{active.title}</h3>
              <p className={styles.summary}>{active.summary}</p>
              {active.items && active.items.length > 0 && (
                <ul className={styles.list}>
                  {active.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className={styles.buttons}>
                <Button href="/get-a-quote" icon="/assets/images/icons/thunder.svg">
                  Get a Free Consultation
                </Button>
                <Button href="/contact-us" variant="secondary">
                  Request a Services
                </Button>
              </div>
            </div>

            <div className={styles.image_column}>
              <Image
                src={section.services[activeIndex].image}
                alt="Social media marketing services"
                width={500}
                height={500}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

