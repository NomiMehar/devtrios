"use client";

import React from "react";
import Image from "next/image";
import styles from "./Sustainability.module.scss";
import Button from "@/app/(components)/button/Button";

export default function Sustainability() {
  return (
    <section className={styles.sustainability}>
      <div className="container">
        <div className={styles.content_wrapper}>
          {/* Left Section - Text Content */}
          <div className={styles.text_section}>
            <h2 className={styles.title}>
              Responsible &<br />
              Sustainable Technology
            </h2>
            <p className={styles.description}>
              Devtrios is committed to building ethical, sustainable, and responsible digital solutions. As a participant of the United Nations Global Compact, we align our work with global principles covering human rights, labour, environmental responsibility, and anti-corruption—ensuring long-term value for our clients and communities.
            </p>
            <div className={styles.button_wrapper}>
              <Button href="http://un.yourdevz.com/" target="_blank" rel="noopener noreferrer">
                View Our Sustainability & UN Commitment
              </Button>
            </div>
          </div>

          {/* Right Section - Visual Content */}
          <div className={styles.visual_section}>
            <Image src="/assets/images/services/global.png" alt="sustainability-section-bg" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </section>
  );
}
