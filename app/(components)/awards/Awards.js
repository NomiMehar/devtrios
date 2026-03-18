"use client";
import React from "react";
import styles from "./Awards.module.scss";
import Image from "next/image";
import "swiper/css";
import data from "./AwardsList.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Awards({ noPadding = false }) {
  const swiperInstanceRef = React.useRef(null);

  return (
    <React.Fragment>
      <section
        className={`${styles.awards} ${noPadding ? styles.no_padding_bottom : ""
          }`}
      >
        <div className="container">
          <div className={styles.headerRow}>
            <div className={styles.headerText}>
              <h2 className={`section-heading ${styles.heading}`}>
                Our Awards and Recognitions
              </h2>
              <p className={styles.subheading}>
                Our decade-digital leadership has produced 100+ certified awards
                &amp; accolades on recognized forums.
              </p>
            </div>

            <div className={styles.navButtons}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => swiperInstanceRef.current?.slidePrev()}
              >
                ‹
              </button>

              <button
                type="button"
                className={styles.navBtn}
                onClick={() => swiperInstanceRef.current?.slideNext()}
              >
                ›
              </button>
            </div>
          </div>

          <div className={styles.sliderWrap}>
            <Swiper
              modules={[Autoplay]}
              loop={true}
              centeredSlides={true}
              slidesPerView={5}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 4 },
              }}
              spaceBetween={15}
              speed={1200}
              autoplay={{
                delay: 1800,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              navigation={false}
              onSwiper={(swiper) => {
                swiperInstanceRef.current = swiper;
              }}
              className={styles.awardsSwiper}
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className={styles.slide}>
                  <div className={styles.card}>
                    <div className={styles.cardLink}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={item.image}
                          alt="Award badge"
                          width={520}
                          height={320}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            data-tb-embedded-award
            data-tb-embedded-award-style="banner"
            data-tb-embedded-award-id="devtrios"
            data-tb-embedded-award-edition="2025"
          ></div>
        </div>
      </section>
    </React.Fragment>
  );
}
