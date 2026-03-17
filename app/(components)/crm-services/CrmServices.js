"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "@/app/(components)/button/Button";
import styles from "./CrmServices.module.scss";
import data from "./CrmServicesList.json";
import Image from "next/image";

export default function CrmServices({ sectionKey = "crm_implementation" }) {
  const [activeIndex, setActiveIndex] = useState(2);
  const section = data?.[sectionKey];

  if (!section || !section.services?.length) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>{section.heading}</h2>
          <p className={styles.subtitle}>{section.subtitle}</p>
        </div>

        <div className={styles.cards_row}>
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className={styles.swiper}
          >
            {section.services.map((service, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={service.title} className={styles.slide}>
                  <div
                    className={`${styles.card} ${
                      isActive ? styles.card_active : ""
                    }`}
                  >
                    <div className={styles.card_icon}>
                      <Image
                        src="/assets/images/services/crm-service-1.svg"
                        width={42}
                        height={42}
                        alt={service.title}
                      />
                    </div>
                    <h3 className={styles.card_title}>{service.title}</h3>
                    <p className={styles.card_text}>{service.description}</p>
                    <div className={styles.card_bullet}>»</div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className={styles.footer_cta}>
          <Button href="/get-a-quote" icon="/assets/images/icons/thunder.svg">
            Get a Free UX Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

