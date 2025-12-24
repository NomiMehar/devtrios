"use client";
import React from "react";
import styles from "./Awards.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "./AwardsList.json";

export default function Awards({ noPadding = false }) {
  return (
    <React.Fragment>
      <section
        className={`${styles.awards} ${
          noPadding ? styles.no_padding_bottom : ""
        }`}
      >
        <div className="container">
          <h2 className={`section-heading ${styles.heading}`}>
            Awards
          </h2>
          <div className={styles.grid}>
            {data.map((item) => (
              <div key={item.id} className={styles.card}>
                <Link href={item.link} className={styles.cardLink}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={item.image}
                      alt="Award badge"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div
            data-tb-embedded-award
            data-tb-embedded-award-style="banner"
            data-tb-embedded-award-id="devtrios"
            data-tb-embedded-award-edition="2025"
          ></div>
        </div>
      </section>
    </React.Fragment>
  );
}
