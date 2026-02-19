"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhyChooseDevtriosAutomation.module.scss";

export default function WhyChooseDevtriosAutomation({ data }) {
  if (!data || !data.reasons) {
    return null;
  }

  return (
    <section className={styles.why_choose_devtrios_automation}>
      <div className="container">
        <div className={styles.section_header}>
          <h2 className={styles.heading}>{data.heading}</h2>
        </div>

        <div className={styles.diagram_wrapper}>
          {/* Central Box */}
          <div className={styles.central_box_wrapper}>
            <div className={styles.central_box}>
              <div className={styles.icon_wrapper}>
                <Image
                  src={data.centralIcon || "/assets/images/header/nav-icon-3.svg"}
                  alt="AI Chatbot Development"
                  width={60}
                  height={60}
                  className={styles.icon}
                />
              </div>
              <h3 className={styles.central_title} dangerouslySetInnerHTML={{__html:data.centralTitle}} />
              </div>
          </div>

          {/* Connecting Lines */}
          <div className={styles.lines_container}>
            {data.reasons.map((_, index) => (
              <div key={index} className={styles.line_wrapper}>
                <Image
                  src="/assets/images/services/choose-line.png"
                  alt="connecting line"
                  width={200}
                  height={150}
                  className={styles.connecting_line}
                />
              </div>
            ))}
          </div>

          {/* Reason Boxes */}
          <div className={styles.reasons_grid}>
            {data.reasons.map((reason, index) => (
              <div key={index} className={styles.reason_box}>
                <div className={styles.reason_icon_wrapper}>
                  <Image
                    src={reason.icon || "/assets/images/header/nav-icon-3.svg"}
                    alt={reason.title}
                    width={60}
                    height={60}
                    className={styles.reason_icon}
                  />
                </div>
                <p className={styles.reason_text}>{reason.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Text */}
        {data.closingText && (
          <p className={styles.closing_text}>{data.closingText}</p>
        )}
      </div>
    </section>
  );
}
