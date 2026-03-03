"use client";

import React from "react";
import Image from "next/image";
import styles from "./UiuxBusiness.module.scss";
import data from "./UiuxBusinessList.json";

export default function UiuxBusiness({ type }) {
  const content = (type && data[type]) ? data[type] : data.uiuxBusiness;
  if (!content) return null;

  return (
    <section className={styles.uiux_business}>
      <div className="container">
        <h2 className={styles.main_heading}>{content.heading}</h2>
        <p className={styles.intro}>{content.intro}</p>

        <div className={styles.two_column}>
          <div className={styles.left_column}>
            <h3 className={styles.impact_heading}>{content.impactHeading}</h3>
            <ul className={styles.impact_list}>
              {content.impactItems.map((item, index) => (
                <li key={index} className={styles.impact_item}>
                  <div className={styles.icon_wrapper}>
                    <Image
                      src={item.icon || "/assets/images/services/overview-1.svg"}
                      alt=""
                      width={24}
                      height={24}
                      className={styles.icon}
                    />
                  </div>
                  <span className={styles.item_text}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.right_column}>
            <div className={styles.image_wrapper}>
              <Image
                src={content.image || "/assets/images/services/development-pg-banner.avif"}
                alt=""
                width={600}
                height={450}
                className={styles.illustration}
              />
           <p className={styles.closing}>{content.closing}</p>
            </div>
          </div>
        </div>      </div>
    </section>
  );
}
