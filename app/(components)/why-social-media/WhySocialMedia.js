"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import styles from "./WhySocialMedia.module.scss";
import { EffectCoverflow } from "swiper/modules";
import Button from "@/app/(components)/button/Button";
import Image from "next/image";
const SLIDES = [
  "Strategy before execution",
  "Business-aligned messaging",
  "Clear accountability",
  "No filler content",
  "Quality content",
  "Senior-level oversight"
];

export default function WhySocialMedia() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Why Devtrios for Social Media Marketing</h2>
            <p className={styles.intro}>
              Most social media agencies focus on output. We focus on positioning and
              intent.
            </p>
            <Button href="/contact-us" icon="/assets/images/icons/thunder.svg">Get a free consultation</Button>
          </div>

          <div className={styles.right}>
            <div className={styles.swiper_root}>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2.6}
                spaceBetween={32}
                coverflowEffect={{
                  rotate: 25,
                  stretch: 0,
                  depth: 160,
                  modifier: 1.2,
                  slideShadows: false
                }}
                modules={[EffectCoverflow]}
                className="whySocialSwiper"
              >
                {SLIDES.map((title, index) => (
                  <SwiperSlide key={title}>
                    <div className={styles.card}>
                      <div className={styles.card_icon}>
                        <Image src="/assets/images/services/strategy.png" width={42} height={42} alt="strategy" />
                      </div>
                      <h3 className={styles.card_title}>{title}</h3>
                      <div className={styles.card_number}>
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

