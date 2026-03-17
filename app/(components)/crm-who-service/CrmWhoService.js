"use client";

import React from "react";
import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import styles from "./CrmWhoService.module.scss";
import data from "./CrmWhoServiceList.json";

export default function CrmWhoService({ sectionKey = "crm_who_service" }) {
  const section = data[sectionKey];
  if (!section) return null;

  const { heading, subtitle, image, items = [], cta, cardIcon } = section;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.content_wrapper}>
          <div className={styles.image_wrapper}>
            <Image
              src={image?.src || "/assets/images/services/crm-who-service.png"}
              alt={image?.alt || "CRM implementation illustration"}
              width={900}
              height={900}
              className={styles.image}
              loading="lazy"
            />
          </div>

          <div className={styles.cards_column}>
            <div className={styles.cards_scroll}>
              {items.map((text, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.card_icon}>
                    <Image
                      src={cardIcon || "/assets/images/services/crm-service-1.svg"}
                      alt="icon"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className={styles.card_text}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {cta && (
          <div className={styles.footer_cta}>
            <Button href={cta.href} icon={cta.icon}>
              {cta.text}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

