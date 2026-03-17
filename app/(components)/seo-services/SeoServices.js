"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import styles from "./SeoServices.module.scss";
import data from "./SeoServicesList.json";

export default function SeoServices({ sectionKey = "technical_seo_services" }) {
  const section = data[sectionKey];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!section || !section.services || section.services.length === 0) {
    return null;
  }

  const active = section.services[activeIndex];

  return (
    <section className={styles.seo_services_section}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <p className={styles.subtitle}>{section.subtitle}</p>
        </div>

        <div className={styles.card_wrapper}>
          <div className={styles.tabs_column}>
            {section.services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  className={`${styles.tab} ${isActive ? styles.tab_active : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.tab_left}>
                    <span className={styles.tab_label}>{service.title}</span>
                  </div>
                  <span className={styles.tab_arrow}>➜</span>
                </button>
              );
            })}
          </div>

          <div className={styles.content_column}>
            <div className={styles.image_wrapper}>
              <Image
                src={active.image || section.image || "/assets/images/services/seo-services-tech-1.png"}
                alt={active.imageAlt || section.imageAlt || "Technical SEO services"}
                width={960}
                height={540}
                className={styles.image}
              />
            </div>
            <div className={styles.content_body}>
              <h3 className={styles.service_title}>{active.title}</h3>
              <p className={styles.service_description}>{active.description}</p>
              <div className={styles.cta_button}>
                <Button href={section.ctaHref || "/get-a-quote"}>
                  {section.ctaText || "Get a Free Consultation"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

