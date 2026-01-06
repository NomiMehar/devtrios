"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./ServiceBannerWithBlogs.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ServiceBannerWithBlogs({ data }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const paginationRef = useRef(null);

  const filteredBlogs = useMemo(() => {
    if (data.blogs && Array.isArray(data.blogs) && data.blogs.length > 0) {
      return data.blogs.slice(0, 5);
    }
    return [];
  }, [data.blogs]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleSwiperInit = (swiper) => {
    setSwiperInstance(swiper);
  };

  useEffect(() => {
    if (swiperInstance && paginationRef.current) {
      swiperInstance.pagination.el = paginationRef.current;
      swiperInstance.pagination.render();
      swiperInstance.pagination.update();
    }
  }, [swiperInstance, filteredBlogs]);

  return (
    <section className={styles.service_banner_with_blogs}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.left_column}>
            {data.badge && (
              <div className={styles.badge}>
                {data.badge.icon && (
                  <Image
                    src={data.badge.icon}
                    alt=""
                    width={16}
                    height={16}
                    className={styles.badge_icon}
                  />
                )}
                <span>{data.badge.text}</span>
              </div>
            )}

            <div className={styles.heading_block}>
              <h1>
                <span className={styles.title_highlight}>
                  {data.titleStart}
                </span>{" "}
                {data.titleEnd}
              </h1>
            </div>

            <div className={styles.description_block}>
              <p>{data.subtitle}</p>
              <p>{data.description}</p>
            </div>

            {data.benefits && data.benefits.length > 0 && (
              <ul className={styles.benefits_list}>
                {data.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className={styles.bullet}>•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            {data.buttons && data.buttons.length > 0 && (
              <div className={styles.buttons_wrapper}>
                {data.buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.link}
                    className={`${styles.cta_button} ${
                      index === 0 ? styles.primary : styles.secondary
                    }`}
                  >
                    {button.text}
                    {button.icon && (
                      <Image
                        src={button.icon}
                        alt=""
                        width={18}
                        height={18}
                        className={styles.button_icon}
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className={styles.right_column}>
            <div className={styles.blog_section}>
              <h2 className={styles.blog_section_title}>
                {data.blogSectionTitle || "Blog Article"}
              </h2>

              {filteredBlogs.length > 0 && filteredBlogs[activeIndex]?.description ? (
                <p className={styles.blog_section_description}>
                  {filteredBlogs[activeIndex].description}
                </p>
              ) : data.blogSectionDescription ? (
                <p className={styles.blog_section_description}>
                  {data.blogSectionDescription}
                </p>
              ) : null}

              {filteredBlogs.length > 0 ? (
                <>
                  <div className={styles.blog_slider_wrapper}>
                    <Swiper
                      onSwiper={handleSwiperInit}
                      onSlideChange={handleSlideChange}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation={false}
                      pagination={{
                        clickable: true,
                        el: paginationRef.current,
                        bulletClass: styles.pagination_bullet,
                        bulletActiveClass: styles.pagination_bullet_active,
                      }}
                      modules={[Pagination]}
                      className={styles.blog_swiper}
                    >
                      {filteredBlogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                          <Link
                            href={blog.button.link}
                            className={styles.blog_card}
                          >
                            {blog.image && (
                              <div className={styles.blog_image_wrapper}>
                                <Image
                                  src={blog.image}
                                  alt={blog.title}
                                  width={400}
                                  height={300}
                                  className={styles.blog_image}
                                />
                              </div>
                            )}
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <div className={styles.blog_navigation}>
                    <div ref={paginationRef} className={styles.pagination_dots}></div>
                    <div className={styles.navigation_arrows}>
                      <button
                        className={`${styles.nav_button} ${styles.nav_prev}`}
                        onClick={() => swiperInstance?.slidePrev()}
                        aria-label="Previous blog"
                        disabled={activeIndex === 0}
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
                        aria-label="Next blog"
                        disabled={activeIndex === filteredBlogs.length - 1}
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
                </>
              ) : (
                <div className={styles.no_blogs}>
                  <p>No blogs available.</p>
                </div>
              )}

              {data.footerText && (
                <p className={styles.footer_text}>{data.footerText}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

