"use client";
import React, { useState } from "react";
import styles from "./Faqs.module.scss";
import faqs from "./FaqsList.json";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqs}>
      <div className="container">
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.wrapper}>
          {faqs.map((item, index) => {
            const active = openIndex === index ? styles.active : "";

            return (
              <div key={index} className={`${styles.faq_item} ${active}`}>
                <button
                  className={styles.faq_title}
                  onClick={() => toggle(index)}
                >
                  <span>{item.title}</span>
                  <div className={styles.icon_wrapper}>
                    <span className={styles.icon}>
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {openIndex === index && (
                  <div className={styles.faq_desc}>
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
