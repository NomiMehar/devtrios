"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./WebsiteTechStack.module.scss";
import techData from "./WebsiteTechStackList.json";

const categories = Object.keys(techData);

export default function WebsiteTechStack() {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className={styles.tech_stack}>
      <div className="container">
        <h2 className={styles.heading}>Tech Stack That Powers Our Web Development Services</h2>
        <p className={styles.description}>
          At Devtrios our web developers use the latest technologies to help businesses stay ahead of the curve. Our robust tech stack ensures high-quality web development services, delivering innovative solutions tailored to meet diverse business needs.
        </p>

        <div className={styles.divider}></div>

        {/* Category Tabs */}
        <div className={styles.tabs_wrapper}>
          <div className={styles.tabs} role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                className={`${styles.tab} ${active === cat ? styles.active : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Logos */}
        <div className={styles.logos_container}>
          <div className={styles.logos_row}>
            {techData[active].map((tech, i) => (
              <div key={i} className={styles.logo_item}>
                <div className={styles.logo_image}>
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={80}
                    height={80}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <span className={styles.logo_name}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
