"use client";

import React from "react";
import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import styles from "./SocialMediaProcess.module.scss";

const STEPS = [
  {
    title: "Strategy & Alignment",
    description:
      "We align social media with your brand, ICP, and business goals so every activity has a clear purpose.",
    image: "/assets/images/services/social-media-service-1.png"
  },
  {
    title: "Content Planning",
    description:
      "We define content pillars, formats, and themes that support campaigns, launches, and always-on demand.",
    image: "/assets/images/services/social-media-service-1.png"
  },
  {
    title: "Creation & Scheduling",
    description:
      "Consistent, branded content delivered across platforms with a controlled, repeatable calendar.",
    image: "/assets/images/services/social-media-service-1.png"
  },
  {
    title: "Optimisation",
    description:
      "Continuous refinement based on performance data, audience behaviour, and feedback loops.",
    image: "/assets/images/services/social-media-service-1.png"
  },
  {
    title: "Reporting & Insights",
    description:
      "Straightforward reporting that connects activity to outcomes, not just vanity metrics.",
    image: "/assets/images/services/social-media-service-1.png"
  }
];

export default function SocialMediaProcess() {

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <h2 className={styles.heading}>Our Social Media Process</h2>
            <p className={styles.subtitle}>
              A simple, controlled, repeatable system for social media that your team can
              actually manage.
            </p>
            <div className={styles.image_wrapper}>
              <Image
                src="/assets/images/services/social-media-service-1.png"
                alt="Social media process"
                width={960}
                height={640}
                className={styles.image}
              />
            </div>
            <div className={styles.left_cta}>
              <Button href="/get-a-quote" icon="/assets/images/icons/thunder.svg">
                Get a Free Consultation
              </Button>
              <Button href="/get-a-quote" variant="secondary">
                Get a Free Quote
              </Button>
            </div>
          </div>

          <div className={styles.right}>
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className={styles.step}
                style={{ zIndex: STEPS.length - index }}
              >
                <div className={styles.step_main}>
                  <div className={styles.step_number}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.step_content}>
                    <h3 className={styles.step_title}>{step.title}</h3>
                    <p className={styles.step_description}>{step.description}</p>
                  </div>
                </div>
                <div className={styles.step_image}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={160}
                    height={160}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

