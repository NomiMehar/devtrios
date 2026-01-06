"use client";

import React from "react";
import styles from "./ServiceList.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ServiceList({ data }) {
  return (
    <section className={styles.service_list}>
      {/* Top Section - Light Theme */}
      <div className={styles.top_section}>
        <div className="container">
          <div className={styles.top_content}>
            <div className={styles.top_heading}>
              <h2>{data.heading}</h2>
            </div>
            <div className={styles.top_description}>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Dark Theme */}
      <div className={styles.bottom_section}>
        <div className="container">
          <div className={styles.bottom_content}>
            {/* Left Column - Sticky */}
            <div className={styles.left_column}>
              <div className={styles.left_content}>
                <span className={styles.services_label}>OUR SERVICES</span>
                <h3 className={styles.left_heading}>Discover Our Expertise</h3>
                <p className={styles.left_description}>
                  Each solution below is delivered with performance, SEO, and maintainability in mind.
                </p>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div className={styles.right_column}>
              {data.services.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`${styles.service_card} ${
                      isEven ? styles.card_light : styles.card_dark
                    }`}
                  >
                    {service.icon && (
                      <div className={styles.card_icon}>
                        <Image
                          src={service.icon}
                          alt={service.title}
                          width={48}
                          height={48}
                          className={styles.icon_image}
                        />
                      </div>
                    )}

                    <h4 className={styles.card_title}>{service.title}</h4>
                    <p className={styles.card_description}>{service.description}</p>

                    {service.link && (
                      <Link href={service.link} className={styles.card_link}>
                        Learn More
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
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
