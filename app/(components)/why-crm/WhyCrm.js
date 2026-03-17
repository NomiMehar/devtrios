"use client";

import React from "react";
import styles from "./WhyCrm.module.scss";
import data from "./WhyCrmList.json";

export default function WhyCrm({ sectionKey = "crm_implementation" }) {
  const section = data?.[sectionKey];
  if (!section || !section.reasons?.length) return null;

  const { heading, subtitle, reasons, footerNote } = section;

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subtitle}>{subtitle}</p>

          <div className={styles.steps_row}>
            {reasons.map((reason, index) => (
              <div key={`${reason}-${index}`} className={styles.step}>
                <div className={styles.icon_hex}>
                  <span className={styles.icon_inner} />
                </div>
                <p className={styles.step_title}>{reason}</p>
                {index < reasons.length - 1 && (
                  <div className={styles.connector} />
                )}
              </div>
            ))}
          </div>

          {footerNote && (
            <p className={styles.footer_note}>{footerNote}</p>
          )}
        </div>
      </div>
    </section>
  );
}
