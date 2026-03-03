"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUiux.module.scss";
import data from "./WhyChooseUiuxList.json";

export default function WhyChooseUiux({ type }) {
  const content = (type && data[type]) ? data[type] : (data.ux_research || data);
  const { heading, subtitle, steps = [] } = content || {};

  if (!steps.length) return null;

  const timelineClassName = [
    styles.timeline,
    styles[`steps_${steps.length}`] || ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={styles.why_choose_uiux}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={timelineClassName}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.step_number}>{step.number}</div>
              <div className={styles.diamond_wrapper}>
                {/* Base diamond shape from provided SVG */}
                <svg
                  className={styles.diamond_svg}
                  viewBox="0 0 266 192"
                  aria-hidden="true"
                >
                  <g filter="url(#filter0_f_240_15)">
                    <path
                      d="M212.728 83.6387C225.032 90.7453 225.099 102.258 212.877 109.348L155.484 142.678C143.246 149.768 123.363 149.768 111.059 142.678L53.2845 109.348C40.9801 102.258 40.8806 90.7619 53.1353 83.6387L110.528 50.3255C122.766 43.219 142.649 43.219 154.954 50.3255L212.728 83.6387Z"
                      fill="#C1C1C1"
                      fillOpacity="0.88"
                    />
                  </g>
                  <path
                    d="M215.198 69.6763L155.779 104.21C143.125 111.556 122.523 111.556 109.784 104.21L50.0382 69.6763C43.6344 65.969 40.4239 61.0945 40.4411 56.2715V63.137C40.4411 67.9943 43.6344 72.8516 50.0382 76.5418L109.853 111.075C122.592 118.421 143.177 118.421 155.847 111.075L215.198 76.5418C221.499 72.9031 224.641 68.1144 224.658 63.3258V56.4603C224.71 61.249 221.568 66.0205 215.198 69.6763Z"
                    fill="#C0C0C0"
                  />
                  <path
                    d="M215.198 43.0386C227.937 50.4018 228.006 62.3306 215.336 69.6766L155.916 104.21C143.263 111.556 122.661 111.556 109.922 104.21L50.0382 69.6766C37.2992 62.3306 37.2306 50.4018 49.8837 43.0386L109.321 8.52242C121.974 1.15919 142.559 1.15919 155.315 8.52242L215.198 43.0386Z"
                    fill="#F5F5F5"
                  />
                  <defs>
                    <filter
                      id="filter0_f_240_15"
                      x="0"
                      y="0.995605"
                      width="266"
                      height="191"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="22"
                        result="effect1_foregroundBlur_240_15"
                      />
                    </filter>
                  </defs>
                </svg>

                {/* Center icon */}
                <div className={styles.diamond_icon}>
                  <Image
                    src="/assets/images/header/nav-icon-3.svg"
                    alt=""
                    width={32}
                    height={32}
                    className={styles.icon}
                  />
                </div>
              </div>
              <p className={styles.step_title}>{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

