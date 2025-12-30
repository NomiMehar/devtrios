"use client";

import React, { useState, useEffect } from "react";
import styles from "./ServiceList.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ServiceList({ data }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const selectedService = data.services[selectedIndex];

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev === 0 ? data.services.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 150);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedIndex((prev) => (prev === data.services.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 150);
  };

  const handleServiceClick = (index) => {
    if (index !== selectedIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedIndex(index);
        setIsAnimating(false);
      }, 150);
    }
  };


  return (
    <section className={styles.service_list}>
      <div className="container">
      <div className={styles.wrapper}>
      <div className={styles.heading_block}>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.left_section}>
            <div className={styles.left_content}>
              <div className={styles.services_list}>
                {data.services.map((service, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => handleServiceClick(index)}
                      className={`${styles.service_list_item} ${index === selectedIndex ? styles.active : ""
                        }`}
                    >
                      <span className={styles.service_number}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.service_list_title}>{service.title}</span>
                    </button>
                  );
                })}
              </div>
              <div className={styles.navigation}>
                <div className={styles.navigation_buttons}>
                  <button
                    onClick={handlePrevious}
                    className={`${styles.nav_button} ${styles.nav_prev}`}
                    aria-label="Previous service"
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
                    onClick={handleNext}
                    className={`${styles.nav_button} ${styles.nav_next}`}
                    aria-label="Next service"
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
          </div>

          <div className={styles.right_panel}>
            <div className={`${styles.service_detail_card} ${isAnimating ? styles.fade_out : styles.fade_in}`}>
              {selectedService.icon && (
                <div className={styles.detail_icon}>
                  <Image
                    src={selectedService.icon}
                    alt={selectedService.title}
                    width={80}
                    height={80}
                    className={styles.detail_icon_image}
                  />
                  <div className={styles.icon_glow}></div>
                </div>
              )}

              <h3 className={styles.detail_title}>{selectedService.title}</h3>
              <p className={styles.detail_description}>{selectedService.description}</p>

              {(selectedService.idealFor || selectedService.builtFor || selectedService.bestFor || selectedService.ideal) && (
                <div className={styles.detail_badge}>
                  <span className={styles.badge_text}>
                    {selectedService.idealFor || selectedService.builtFor || selectedService.bestFor || selectedService.ideal}
                  </span>
                </div>
              )}

              {selectedService.link && (
                <div className={styles.detail_cta}>
                  <Link href={selectedService.link} className={styles.detail_link}>
                    {selectedService.linkText || "Learn More"}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

