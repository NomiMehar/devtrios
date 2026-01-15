"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./BlogsSlider.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "@/app/(components)/blogs-slider/BlogsSliderList.json";

export default function BlogsSlider({ noPadding = false }) {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Get 6-7 most recent blogs
  const recentBlogs = React.useMemo(() => {
    return [...data]
      .sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA; // Sort descending (newest first)
      })
      .slice(0, 7); // Get first 7 most recent
  }, []);

  // Format date to match design: "JULY 31, 2025"
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    // Handle formats like "Dec 23, 2025" or "December 23, 2025"
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // If parsing fails, try to extract from string format
      const parts = dateString.split(" ");
      if (parts.length >= 3) {
        const monthMap = {
          "Jan": "JANUARY", "Feb": "FEBRUARY", "Mar": "MARCH", "Apr": "APRIL",
          "May": "MAY", "Jun": "JUNE", "Jul": "JULY", "Aug": "AUGUST",
          "Sep": "SEPTEMBER", "Oct": "OCTOBER", "Nov": "NOVEMBER", "Dec": "DECEMBER"
        };
        const month = monthMap[parts[0]] || parts[0].toUpperCase();
        const day = parts[1].replace(",", "");
        const year = parts[2];
        return `${month} ${day}, ${year}`;
      }
      return dateString.toUpperCase();
    }
    
    const months = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <section
      className={`${styles.blogs} ${noPadding ? styles.no_padding_top : ""}`}
    >
      <div className="container">
        <div className={styles.header}>
          <div className={styles.heading_wrapper}>
            <h2 className={styles.heading}>
              Blogs
            </h2>
            <p className={styles.description}>
              We partner with ambitious teams to solve real problems, ship better products, and drive lasting results.
            </p>
          </div>
          <div className={styles.header_actions}>
            <Link href="/blog" className={styles.view_all_button}>
              View All
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className={styles.slider_container}>
          <Swiper
            onSwiper={setSwiperInstance}
            spaceBetween={15}
            slidesPerView={4}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            allowTouchMove={true}
            breakpoints={{
              220: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3.1,
                spaceBetween: 15,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
            className={`blogsSwiper ${styles.blogsSwiper}`}
          >
            {recentBlogs.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={styles.card}>
                  <Link href={item.button.link} className={styles.card_link}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={280}
                        className={styles.card_image}
                      />
                    </div>
                    <div className={styles.card_content}>
                      <div className={styles.meta}>
                        {item.category && (
                          <span className={styles.category}>{item.category.toUpperCase()}</span>
                        )}
                        {item.date && (
                          <>
                            <span className={styles.separator}> • </span>
                            <span className={styles.date}>{formatDate(item.date)}</span>
                          </>
                        )}
                      </div>
                      <h3 className={styles.title}>{item.title}</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

