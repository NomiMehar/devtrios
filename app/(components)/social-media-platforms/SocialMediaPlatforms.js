"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import styles from "./SocialMediaPlatforms.module.scss";
import data from "./SocialMediaPlatformsList.json";

const PLATFORM_TEXT = {
  LinkedIn:
    "Develop a professional presence where buyers, partners, and candidates expect to find you. Ideal for B2B, services, and leadership brands.",
  Instagram:
    "Showcase visual stories, social proof, and behind-the-scenes content that builds familiarity and brand affinity.",
  Facebook:
    "Reach established audiences, communities, and interest groups with content and campaigns that support long-term engagement.",
  "X (Twitter)":
    "Stay present in real-time conversations, categories, and communities that shape perception in your space.",
  "TikTok (when aligned with audience and goals)":
    "Short-form storytelling used only when the audience, offer, and resources make sense for the channel."
};

export default function SocialMediaPlatforms() {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data || !data.platforms || data.platforms.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.heading}>{data.heading}</h2>
          <p className={styles.subtitle}>{data.subtitle}</p>

          <div className={styles.swiper_wrapper}>
            <Swiper
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false
              }}
              spaceBetween={22}
              slidesPerView={1.2}
              loop={true}
              // centeredSlides={true}
              modules={[Autoplay]}
              breakpoints={{
                640: { slidesPerView: 2.6 },
                1024: { slidesPerView: 3.4 },
                1440: { slidesPerView: 4.1 }
              }}
              className={styles.swiper}
            >
              {data.platforms.map((name, index) => {
                const isActive = index === activeIndex;
                const text = PLATFORM_TEXT[name] || data.note;
                const key = name.toLowerCase().includes("linkedin")
                  ? "linkedin"
                  : name.toLowerCase().includes("instagram")
                  ? "instagram"
                  : name.toLowerCase().includes("facebook")
                  ? "facebook"
                  : name.toLowerCase().startsWith("x")
                  ? "x"
                  : "tiktok";

                return (
                  <SwiperSlide key={name}>
                    <div
                      className={`${styles.slide_content} ${
                        isActive ? styles.slide_active : styles.slide_inactive
                      }`}
                    >
                      <div
                        className={`${styles.icon} ${styles[`icon_${key}`]}`}
                      >
                        {name.charAt(0)}
                      </div>
                      <div className={styles.text_block}>
                        <h3 className={styles.slide_title}>{name}</h3>
                        <p className={styles.slide_text}>{text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <p className={styles.note}>{data.note}</p>
        </div>
      </div>
    </section>
  );
}

