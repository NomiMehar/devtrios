"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhyChooseBlockchain.module.scss";

export default function WhyChooseBlockchain({ data }) {
  if (!data || !data.reasons?.length) {
    return null;
  }

  return (
    <section className={styles.why_choose_blockchain}>
      <div className="container">
        <div className={styles.grid_layout}>
          <div className={styles.left_content}>
            <div className={styles.section_header}>
              <h2 className={styles.heading}>{data.heading}</h2>
              <p className={styles.description}>{data.description}</p>
            </div>
          </div>

          <div className={styles.right_content}>
            <div className={styles.cards_grid}>
              {data.reasons.map((reason, index) => (
                <div
                  key={index}
                  className={`${styles.card}`}
                >
                  <div className={styles.icon_wrapper}>
                    <Image
                      src={reason.icon || "/assets/images/header/nav-icon-3.svg"}
                      alt=""
                      width={48}
                      height={48}
                      className={styles.icon}
                    />
                  </div>
                  <p className={styles.card_text}>{reason.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
