"use client";

import React from "react";
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
  return (
    <div className={styles.our_expertise}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.heading_wrapper}>
            <span>Proven Expertise Across 16+ Industries</span>
            <h2 className={styles.heading}>
              We don’t just build websites, we understand your industry
            </h2>
          </div>

          <Swiper
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            navigation={{ clickable: true }}
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
                    width={100}
                    height={100}
                    loading="lazy"
                    className={styles.bg_img}
                  />

                  <div className={styles.wrapper}>
                    <div className={styles.inner_wrapper}>
                      <Image
                        src={`/assets/images/expertise_slider/${item.icon}`}
                        alt={`${item.title}-icon`}
                        width={50}
                        height={50}
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
