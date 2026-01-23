"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Button from "@/app/(components)/button/Button";
import styles from "./WhyChoose.module.scss";

export default function WhyChoose({ data }) {
  const swiperRef = useRef(null);

  if (!data || !data.features) {
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
    <section className={styles.why_choose}>
      <div className="container">
        <div className={styles.section_header}>
          <div className={styles.heading_block}>
            <h2 dangerouslySetInnerHTML={{ __html: data.heading }} />
          </div>
          <div className={styles.description_block}>
            <p>{data.description}</p>
            {data.cta && (
              <div className={styles.cta_section}>
                <Button href={data.cta.url || "/contact"}>
                  {data.cta.text || "Request a Quote"}
                </Button>
              </div>
            )}
          </div>
        </div>

        <div 
          className={styles.cards_container}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              // Ensure autoplay starts
              if (swiper.autoplay) {
                swiper.autoplay.start();
              }
            }}
            spaceBetween={20}
            slidesPerView={1}
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
            {data.features.map((feature, index) => {
              const cardNumber = String(index + 1).padStart(2, "0");
              
              return (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <div className={styles.card_number}>{cardNumber}</div>
                    <p className={styles.card_text} dangerouslySetInnerHTML={{ __html: feature }} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

