"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <h2 className={styles.heading}>Testimonials</h2>
          <Swiper
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2.2 },
              1440: { slidesPerView: 2.2 },
            }}
            className={`testimonialsSwiper ${styles.testimonialsSwiper}`}
          >
            <SwiperSlide>
              <div className={styles.block}>
                <Image
                  src={`/assets/images/home/coma.png`}
                  alt="coma"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.coma_img}
                />
                <p>
                  “Working with Devtrios was wonderful—knowledgeable,
                  professional & responsive with insights that added real
                  value.”
                </p>
                <h4>Connie Woo</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.block}>
                <Image
                  src={`/assets/images/home/coma.png`}
                  alt="coma"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.coma_img}
                />
                <p>
                  “Working with Devtrios was wonderful—knowledgeable,
                  professional & responsive with insights that added real
                  value.”
                </p>
                <h4>Connie Woo</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.block}>
                <Image
                  src={`/assets/images/home/coma.png`}
                  alt="coma"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.coma_img}
                />
                <p>
                  “Working with Devtrios was wonderful—knowledgeable,
                  professional & responsive with insights that added real
                  value.”
                </p>
                <h4>Connie Woo</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.block}>
                <Image
                  src={`/assets/images/home/coma.png`}
                  alt="coma"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.coma_img}
                />
                <p>
                  “Working with Devtrios was wonderful—knowledgeable,
                  professional & responsive with insights that added real
                  value.”
                </p>
                <h4>Connie Woo</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.block}>
                <Image
                  src={`/assets/images/home/coma.png`}
                  alt="coma"
                  width={100}
                  height={100}
                  loading="lazy"
                  className={styles.coma_img}
                />
                <p>
                  “Working with Devtrios was wonderful—knowledgeable,
                  professional & responsive with insights that added real
                  value.”
                </p>
                <h4>Connie Woo</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
