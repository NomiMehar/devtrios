"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./TechnologyStack.module.scss";
import techData from "@/app/(components)/technology-stack/TechnologyStackList.json";

const categories = Object.keys(techData);

export default function TechnologyStack() {
  const [active, setActive] = useState(categories[0]);
  const tabsRef = useRef([]);

  // keyboard navigation for tabs (Left/Right)
  function onKeyDown(e, idx) {
    if (e.key === "ArrowRight") {
      const next = (idx + 1) % categories.length;
      tabsRef.current[next]?.focus();
      setActive(categories[next]);
    } else if (e.key === "ArrowLeft") {
      const prev = (idx - 1 + categories.length) % categories.length;
      tabsRef.current[prev]?.focus();
      setActive(categories[prev]);
    }
  }

  return (
    <div className={styles.technology_stack}>
      <div className="container">
        <h2 className={styles.heading}>Technology Stack</h2>

        {/* Tabs */}
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Technology categories"
        >
          {categories.map((cat, idx) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              aria-controls={`panel-${idx}`}
              id={`tab-${idx}`}
              tabIndex={active === cat ? 0 : -1}
              ref={(el) => (tabsRef.current[idx] = el)}
              className={`${styles.tab} ${active === cat ? styles.active : ""}`}
              onClick={() => setActive(cat)}
              onKeyDown={(e) => onKeyDown(e, idx)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          id={`panel-${categories.indexOf(active)}`}
          role="tabpanel"
          aria-labelledby={`tab-${categories.indexOf(active)}`}
          className={styles.panel}
        >
          <div className={styles.inner_panel}>
            <div className={styles.logo_grid}>
              {techData[active].map((imgName, i) => (
                <div className={styles.logo_box} key={i}>
                  <Image
                    src={`/assets/images/technology_stack/${imgName}`}
                    alt={imgName.replace(/\.[^/.]+$/, "")}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
