"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Blogs.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "@/app/(components)/blogs/BlogsList.json";

export default function Blogs({ noPadding = false }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section
      className={`${styles.blogs} ${noPadding ? styles.no_padding_top : ""}`}
    >
      <div className="container">
        <div className={styles.header}>
          <h2 className={`section-heading ${styles.heading}`}>
            Our Blogs
          </h2>
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

        <div className={styles.slider_container}>
          <Swiper
            onSwiper={setSwiperInstance}
            spaceBetween={20}
            slidesPerView={3.2}
            navigation={false}
            modules={[Navigation]}
            allowTouchMove={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
            }}
            className={`blogsSwiper ${styles.blogsSwiper}`}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  <Link href={item.button.link} className={styles.card_link}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={250}
                        className={styles.card_image}
                      />
                    </div>
                    <div className={styles.card_content}>
                      {item.category && (
                        <span className={styles.category}>{item.category}</span>
                      )}
                      <h3 className={styles.title}>{item.title}</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.cta_section}>
          <Link href="/blog" className={styles.read_blogs_button}>
            Read Our Blogs
            <Image src="/assets/images/home/arrow-circle-right.webp" alt="arrow-circle-right" width={20} height={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
