"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./AiAutomationServices.module.scss";

export default function AiAutomationServices({ data }) {
  const swiperRef = useRef(null);

  if (!data || !data.services) {
    return null;
  }

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <section className={styles.ai_automation_services}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>{data.heading}</h2>
          <p className={styles.description}>{data.description}</p>
        </div>

        <div 
          className={styles.cards_container}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              if (swiper.autoplay) {
                swiper.autoplay.start();
              }
            }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
              bulletClass: styles.pagination_bullet,
              bulletActiveClass: styles.pagination_bullet_active,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className={styles.swiper}
          >
            {data.services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  <div className={styles.icon_wrapper}>
                    <Image
                      src={service.icon || "/assets/images/header/nav-icon-3.svg"}
                      alt={service.title}
                      width={1000}
                      height={1000}
                      loading="lazy"
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.card_title}>{service.title}</h3>
                  <p className={styles.card_description}>{service.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
