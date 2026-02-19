"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./AiAutomationProcess.module.scss";

export default function AiAutomationProcess({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  if (!data || !data.steps) {
    return null;
  }

  const currentStep = data.steps[hoveredIndex];
  const currentImage = currentStep.hoverImage || currentStep.image;

  return (
    <section className={styles.ai_automation_process}>
      <div className="container">
            <div className={styles.section_header}>
              <h2 className={styles.heading}>{data.heading}</h2>
              <p className={styles.description}>{data.description}</p>
            </div>
        <div className={styles.content_wrapper}>
          <div className={styles.process_list}>

            <div className={styles.steps_container}>
              {data.steps.map((step, index) => {
                const stepNumber = String(index + 1).padStart(2, "0");
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    className={`${styles.step_card} ${styles.blue_card} ${isHovered ? styles.hovered : ""}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                  >
                    <div className={styles.step_content}>
                      <div className={styles.step_header}>
                        <span className={styles.step_number}>{stepNumber}</span>
                        <h3 className={styles.step_title}>{step.title}</h3>
                        <div className={styles.arrow_icon}>
                          <Image
                            src="/assets/images/services/process_arrow.svg"
                            alt="arrow"
                            width={24}
                            height={24}
                            className={isHovered ? styles.arrow_up : styles.arrow_down}
                          />
                        </div>
                      </div>
                      {isHovered && step.description && (
                        <p className={styles.step_description}>{step.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.image_section}>
            <div className={styles.image_wrapper}>
              <Image
                key={currentImage}
                src={currentImage}
                alt="AI Chatbot Development"
                width={1000}
                height={1000}
                loading="lazy"
                className={styles.main_image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
