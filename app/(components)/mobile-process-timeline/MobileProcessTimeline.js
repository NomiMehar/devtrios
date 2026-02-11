"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileProcessTimeline.module.scss";

export default function MobileProcessTimeline({ data }) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const stepRefs = useRef([]);
  const sectionRef = useRef(null);

  if (!data || !data.steps || data.steps.length === 0) {
    return null;
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = stepRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setActiveStep(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const currentStep = hoveredStep !== null ? hoveredStep : activeStep;

  return (
    <section className={styles.mobile_process_timeline} ref={sectionRef}>
      <div className="container">
        <div className={styles.heading_wrapper}>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className={styles.process_timeline}>
          {data.steps.map((step, index) => {
            const isActive = currentStep >= index;
            const isHovered = hoveredStep === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`${styles.process_step} ${isEven ? styles.step_left : styles.step_right} ${isActive ? styles.active : ""} ${isHovered ? styles.hovered : ""}`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Content */}
                <div className={`${styles.step_content} ${isEven ? styles.content_left : styles.content_right}`}>
                  <h3 className={styles.step_title}>{step.title}</h3>
                  <p className={styles.step_description}>{step.description}</p>
                </div>

                {/* Circle */}
                <div className={styles.step_circle_wrapper}>
                  <div className={`${styles.step_circle} ${isActive ? styles.circle_active : ""}`}>
                    <span className={styles.circle_number}>{step.number}</span>
                  </div>
                  
                  {/* Connecting Line */}
                  {index < data.steps.length - 1 && (
                    <div className={styles.connecting_line}>
                      <div 
                        className={`${styles.line_fill} ${currentStep > index ? styles.line_filled : ""}`}
                        style={{ 
                          height: currentStep > index ? '100%' : (currentStep === index ? '0%' : '0%'),
                          transition: 'height 0.6s ease'
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
