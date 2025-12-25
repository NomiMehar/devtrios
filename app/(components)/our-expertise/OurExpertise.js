"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./OurExpertise.module.scss";

// import JSON data
import expertiseData from "@/app/(components)/our-expertise/OurExpertiseList.json";

export default function OurExpertise() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className={styles.our_expertise}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.header}>
            <div className={styles.heading_wrapper}>
              <span>Proven Expertise Across 16+ Industries</span>
              <h2 className={styles.heading}>
                We don't just build websites, we understand your industry
              </h2>
            </div>
            <div className={styles.header_actions}>
              <div className={styles.navigation_buttons}>
                <button
                  className={`${styles.nav_button} ${styles.nav_prev}`}
                  onClick={() => swiperInstance?.slidePrev()}
                  aria-label="Previous slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className={`${styles.nav_button} ${styles.nav_next}`}
                  onClick={() => swiperInstance?.slideNext()}
                  aria-label="Next slide"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <Swiper
            onSwiper={setSwiperInstance}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            navigation={false}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1.6 },
              480: { slidesPerView: 2.2 },
              640: { slidesPerView: 2.6 },
              768: { slidesPerView: 3.4 },
              1024: { slidesPerView: 3.6 },
              1280: { slidesPerView: 4.3 },
              1440: { slidesPerView: 4.6 },
            }}
            className={`expertiseSwiper ${styles.expertiseSwiper}`}
          >
            {expertiseData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.block}>
                  <Image
                    src={`/assets/images/expertise_slider/${item.image}`}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className={styles.bg_img}
                  />

                  <div className={styles.wrapper}>
                    <div className={styles.inner_wrapper}>
                      <Image
                        src={`/assets/images/expertise_slider/${item.icon}`}
                        alt={`${item.title}-icon`}
                        width={1000}
                        height={1000}
                        loading="lazy"
                        className={styles.inner_img}
                      />
                      <h4>{item.title}</h4>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
