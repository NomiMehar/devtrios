"use client";
import React, { useEffect } from "react";
import styles from "./Awards.module.scss";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import data from "./AwardsList.json";

export default function Awards({ noPadding = false }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://techbehemoths.com/scripts/embedded/awards.js";
    script.onload = () => {
      if (window.tbEmbedAwards) {
        window.tbEmbedAwards(); // manually initialize
      }
    };
    document.body.appendChild(script);
  }, []);
  return (
    <section
      className={`${styles.awards} ${
        noPadding ? styles.no_padding_bottom : ""
      }`}
    >
      <div className="container">
        <h2 className={styles.heading}>Awards</h2>
        <div className={styles.grid}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <Link href={item.link}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt="banner-award-2025-black-winner-devtrios"
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
  );
}
