"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/(components)/button/Button";
import styles from "./MainServices.module.scss";
import data from "./MainServicesList.json";

const iconSrc = "/assets/images/services/overview-1.svg";

export default function MainServices({ type }) {
  const section = (type && data[type]) ? data[type] : data.mainServices;
  const [activeIndex, setActiveIndex] = useState(0);

  if (!section?.services?.length) return null;

  const active = section.services[activeIndex];

  return (
    <section className={styles.main_services}>
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
                    className={`${styles.tab} ${
                      isActive ? styles.tab_active : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className={styles.tab_label}>{service.title}</span>
                    <span className={styles.tab_arrow}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Content panel */}
          <div className={styles.content_column}>
            <div className={styles.content_panel}>
              <div className={styles.panel_inner}>
                <div className={styles.panel_text}>
                  <h3 className={styles.panel_title}>
                    <Link href={active.href || "#"} className={styles.panel_title_link}>
                      {active.title}
                    </Link>
                    </h3>
                  <p className={styles.panel_description}>{active.description}</p>

                  {(active.listLabel || (active.items && active.items.length > 0)) && (
                    <>
                      {active.listLabel && (
                        <h4 className={styles.list_heading}>{active.listLabel}</h4>
                      )}
                      <ul className={styles.panel_list}>
                        {(active.items || []).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className={styles.panel_cta_row}>
                    <Button
                      href={section.ctaHref || "/get-a-quote"}
                      icon="/assets/images/icons/thunder.svg"
                    >
                      Get a Free Consultation
                    </Button>
                    <Button
                      href={section.secondaryCtaHref || "/contact-us"}
                      variant="secondary"
                    >
                      Request a Research Proposal
                    </Button>
                  </div>
                </div>

                {active.image && (
                  <div className={styles.panel_image}>
                    <Image
                      src={active.image}
                      alt={active.title}
                      width={800}
                      height={600}
                      className={styles.panel_image_img}
                    />
                  </div>
                )}
              </div>

              {active.subServices && active.subServices.length > 0 && (
                <div className={styles.subservices_row}>
                  <ul>
                    {active.subServices.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href || "#"}
                          className={styles.subservice_link}
                        >
                          {sub.label || sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
