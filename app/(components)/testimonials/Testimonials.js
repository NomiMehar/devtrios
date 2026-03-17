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
          <div className={styles.section_header}>
            <h2 className={`section-heading ${styles.heading}`}>
              See What Our Happy Customers Say{" "}
              <span>About Devtrios!</span>
            </h2>
            <p className={styles.subtitle}>
              We have been building powerful, secure, and scalable digital
              solutions for our clients for many years and have received
              consistent, high-quality feedback. Here is what they have to say.
            </p>
          </div>

          <div className={styles.ratings_row}>
            <div className={styles.rating_item}>
              <div className={styles.rating_inner}>
                <div className={styles.rating_brand}>
                  <Image
                    src="/assets/images/home/Gogole-Business-Listing-Logo.webp"
                    alt="Google"
                    width={110}
                    height={32}
                  />
                </div>
                <div className={styles.rating_meta}>
                  <div className={styles.ratings_logo}>
                  <p className={styles.rating_score}>
                    4.9<span>/5.0</span>
                  </p>
                  <div className={styles.rating_stars}>
                    <span>★★★★★</span>
                  </div>
                  </div>
                  <p className={styles.rating_caption}>Based on 20+ Clients</p>
                </div>
              </div>
            </div>

            <div className={styles.rating_item}>
              <div className={styles.rating_inner}>
                <div className={styles.rating_brand}>
                  <Image
                    src="/assets/images/home/clutch-logo.webp"
                    alt="Clutch"
                    width={110}
                    height={32}
                  />
                </div>
                <div className={styles.rating_meta}>
                  <div className={styles.ratings_logo}>
                  <p className={styles.rating_score}>
                    4.9<span>/5.0</span>
                  </p>
                    <div className={styles.rating_stars}>
                      <span>★★★★★</span>
                    </div>
                  </div>
                  <p className={styles.rating_caption}>Based on 30+ Clients</p>
                </div>
              </div>
            </div>

            <div className={styles.rating_item}>
              <div className={styles.rating_inner}>
                <div className={styles.rating_brand}>
                  <Image
                    src="/assets/images/home/Yell_Logo.webp"
                    alt="Yell"
                    width={90}
                    height={32}
                  />
                </div>
                <div className={styles.rating_meta}>
                  <div className={styles.ratings_logo}>
                  <p className={styles.rating_score}>
                    5.0<span>/5.0</span>
                  </p>
                    <div className={styles.rating_stars}>
                    <span>★★★★★</span>
                  </div>
                  </div>
                  <p className={styles.rating_caption}>Based on 40+ Clients</p>
                </div>
              </div>
            </div>
          </div>

          <Swiper
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            spaceBetween={24}
            pagination={{ clickable: true }}
            loop={true}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1.4 },
              900: { slidesPerView: 2.2 },
              1280: { slidesPerView: 3 },
            }}
            className={`testimonialsSwiper ${styles.testimonialsSwiper}`}
          >
            {list?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.block}>
                  <div className={styles.card_header}>
                    <div className={styles.card_identity}>
                      <h3 className={styles.client_name}>{item.name}</h3>
                      {item.role && (
                        <p className={styles.client_role}>{item.role}</p>
                      )}
                    </div>
                    <div className={styles.card_stars}>★★★★★</div>
                  </div>

                  <div className={styles.card_divider} />

                  <div className={styles.card_body}>
                    <h4 className={styles.card_title}>
                      {item.title || item.text}
                    </h4>
                    {item.description && (
                      <p className={styles.card_text}>{item.description}</p>
                    )}
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
