"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./ProcessSection.module.scss";

export default function ProcessSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const paginationRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
    if (swiperRef.current && paginationRef.current) {
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, [data]);

  // Safety check
  if (!data || !data.steps || data.steps.length === 0) {
    console.warn("ProcessSection: Missing data or steps", data);
    return <div style={{ padding: "100px 0", background: "#fff" }}>No process data available</div>;
  }

  const IsometricBlock = ({ isActive, index }) => {
    const stepNumber = String(index + 1).padStart(2, "0");
    const stepTitle = data.steps[index]?.title || "";
    const [isHovered, setIsHovered] = useState(false);
    const isEven = (index + 1) % 2 === 0; // Even numbers (2, 4, 6, 8) go on right, odd (1, 3, 5, 7) on left

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const shouldHighlight = isActive || isHovered;

    return (
      <li
        className={`${styles.figure_item} ${isActive ? styles.active : ""} ${isHovered ? styles.hovered : ""} ${isEven ? styles.label_right : styles.label_left}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          if (swiperRef.current) {
            swiperRef.current.slideTo(index);
          }
        }}
      >
        {!isEven && (
          <div className={`${styles.figure_text} ${styles.text_left}`}>
            <span className={isActive ? styles.active_label : ""}>
              <p>
                {stepNumber}. {stepTitle}
              </p>
            </span>
          </div>
        )}
        <div className={styles.figure_svg}>
          <svg width="260" height="99" viewBox="0 0 260 99" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.95">
              <path
                d="M260 43.2L130 86.3L0 43.2L130 0L260 43.2Z"
                fill={shouldHighlight ? "rgba(0, 163, 255, 1)" : "#2a2a2a"}
              />
              <path
                d="M0 43.2002V55.0002L130 98.1002V86.3002L0 43.2002Z"
                fill={shouldHighlight ? "rgb(0, 123, 194)" : "#1f1f1f"}
              />
              <path
                d="M260 43.2002V55.0002L130 98.1002V86.3002L260 43.2002Z"
                fill={shouldHighlight ? "rgb(0, 123, 194)" : "#151515"}
              />
            </g>
          </svg>
        </div>
        {isEven && (
          <div className={`${styles.figure_text} ${styles.text_right}`}>
            <span className={isActive ? styles.active_label : ""}>
              <p>
                {stepNumber}. {stepTitle}
              </p>
            </span>
          </div>
        )}
      </li>
    );
  };

  return (
    <section className={styles.section_our_process}>
      <div className="container">
        <div className={styles.section_name}>
          <span>Our Process</span>
        </div>

        <div className={styles.section_header}>
          <h2 className={styles.section_title}>{data.heading}</h2>
          <div className={styles.section_description}>
            <p>{data.description}</p>
          </div>
        </div>

        <div className={styles.our_process_slider}>
          <div className={styles.slider_body}>
            <div className={styles.slider_main}>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setTimeout(() => {
                    if (prevButtonRef.current && nextButtonRef.current) {
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                    if (paginationRef.current) {
                      swiper.pagination.init();
                      swiper.pagination.render();
                      swiper.pagination.update();
                    }
                  }, 100);
                }}
                onSlideChange={handleSlideChange}
                spaceBetween={10}
                slidesPerView={1}
                navigation={{
                  prevEl: prevButtonRef.current,
                  nextEl: nextButtonRef.current,
                }}
                pagination={{
                  el: paginationRef.current,
                  clickable: true,
                  bulletClass: styles.pagination_bullet,
                  bulletActiveClass: styles.pagination_bullet_active,
                }}
                modules={[Navigation, Pagination]}
                className={styles.swiper}
              >
                {data.steps.map((step, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.slider_count}>
                      <span className={styles.span_md}>
                        {String(index + 1).padStart(2, "0")}.
                      </span>
                    </div>
                    <h3 className={styles.slider_title}>
                      <span className={styles.span_md}>
                        {String(index + 1).padStart(2, "0")}.
                      </span>{" "}
                      {step.title}
                    </h3>
                    <p className={styles.slider_text}>{step.description}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className={styles.slider_nav}>
              <button
                ref={prevButtonRef}
                className={`${styles.nav_button_prev} ${styles.slider_button_prev}`}
                aria-label="Previous step"
              >
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div ref={paginationRef} className={styles.nav_dots}></div>
              <button
                ref={nextButtonRef}
                className={`${styles.nav_button_next} ${styles.slider_button_next}`}
                aria-label="Next step"
              >
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className={styles.slider_figure}>
            <ul className={styles.figure_list}>
              {data.steps.map((step, index) => (
                <IsometricBlock key={index} isActive={activeIndex === index} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
