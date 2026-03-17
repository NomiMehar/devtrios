"use client";

import React from "react";
import styles from "./WhyChooseCrmImplementation.module.scss";
import data from "./WhyChooseCrmImplementationList.json";

export default function WhyChooseCrmImplementation({
  sectionKey = "why_choose_crm_implementation",
}) {
  const section = data[sectionKey];
  if (!section || !section.points?.length) return null;

  const { heading, gridTemplateColumns, gridTemplateRows, points, closing } =
    section;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.heading}>{heading}</h2>

          <div
            className={styles.flow}
            style={{
              gridTemplateColumns: gridTemplateColumns || "repeat(5, 1fr)",
              gridTemplateRows: gridTemplateRows || "auto auto",
            }}
          >
            {points.map((item, index) => {
              const num = String(index + 1).padStart(2, "0");
              const textAbove = item.row === 1;
              return (
                <div
                  key={index}
                  className={styles.step}
                  style={{
                    gridColumn: item.column,
                    gridRow: item.row,
                  }}
                >
                  {textAbove ? (
                    <>
                      <p className={styles.step_text}>{item.text}</p>
                      <div className={styles.circle_wrap}>
                        <div className={styles.circle_outer}>
                          <div className={styles.circle_inner}>{num}</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.circle_wrap}>
                        <div className={styles.circle_outer}>
                          <div className={styles.circle_inner}>{num}</div>
                        </div>
                      </div>
                      <p className={styles.step_text}>{item.text}</p>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {closing && <p className={styles.closing}>{closing}</p>}
        </div>
      </div>
    </section>
  );
}
