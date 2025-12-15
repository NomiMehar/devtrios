"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./Testimonials.module.scss";

export default function Testimonials({ list, padding_bottom = false }) {
  return (
    <div
      className={`${styles.testimonials} ${
        padding_bottom ? styles.padding_bottom : ""
      }`}
    >
      <div className="container">
        <div className={styles.content_wrapper}>
          <h2 className={styles.heading}>Testimonials</h2>

          <Swiper
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            spaceBetween={10}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1.4 },
              480: { slidesPerView: 1.4 },
              640: { slidesPerView: 2.4 },
              1440: { slidesPerView: 2.2 },
            }}
            className={`testimonialsSwiper ${styles.testimonialsSwiper}`}
          >
            {list?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.block}>
                  <Image
                    src={item.image}
                    alt="testimonial icon"
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className={styles.coma_img}
                  />
                  <p>{item.text}</p>
                  <h3>{item.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
