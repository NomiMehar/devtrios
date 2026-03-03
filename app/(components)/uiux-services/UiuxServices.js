"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./UiuxServices.module.scss";
import data from "./UiuxServicesList.json";

const iconSrc = "/assets/images/services/overview-1.svg";

export default function UiuxServices({ type }) {
  const section = (type && data[type]) ? data[type] : data.uiuxServices;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!section?.services?.length) return null;

  const active = section.services[activeIndex];

  return (
    <section className={styles.uiux_services}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.main_heading}>{section.heading}</h2>
          <p className={styles.subtitle}>{section.subtitle}</p>
        </div>

        <div className={styles.two_column}>
          {/* Left: Sticky tabs */}
          <div className={styles.tabs_column}>
            <div className={styles.tabs_wrapper}>
              {section.services.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    className={`${styles.tab} ${isActive ? styles.tab_active : ""}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.tab_icon}>
                      <Image
                        src={iconSrc}
                        alt=""
                        width={24}
                        height={24}
                        className={styles.tab_icon_img}
                      />
                    </span>
                    <span className={styles.tab_label}>{service.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Content panel */}
          <div className={styles.content_column}>
            <div className={styles.content_panel}>
              <h3 className={styles.panel_title}>{active.title}</h3>
              <p className={styles.panel_description}>{active.description}</p>
              {(active.listLabel || (active.items && active.items.length > 0)) && (
                <>
                  {active.listLabel && <h4 className={styles.list_heading}>{active.listLabel}</h4>}
                  <ul className={styles.panel_list}>
                    {(active.items || []).map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              <Link href={section.ctaHref || "/get-a-quote"} className={styles.cta_button}>
                {section.ctaText || "Get a Free UX Consultation"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
