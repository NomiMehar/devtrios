import React from "react";
import styles from "./ServiceBanner.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ServiceBanner({ data }) {
  return (
    <section className={styles.service_banner}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.left_column}>
            <div className={styles.heading_block}>
                <h1>{data.titleStart} <span className={styles.title_highlight}>{data.titleEnd}</span></h1>
            </div>

            <div className={styles.description_block}>
              <p>{data.subtitle}</p>
              <p>{data.description}</p>
            </div>

            {data.benefits && data.benefits.length > 0 && (
              <ul className={styles.benefits_list}>
                {data.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className={styles.bullet}>•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}

            {data.buttons && data.buttons.length > 0 && (
              <div className={styles.buttons_wrapper}>
                {data.buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.link}
                    className={`${styles.cta_button} ${
                      index === 0 ? styles.primary : styles.secondary
                    }`}
                  >
                    {button.text}
                    {button.icon && (
                      <Image
                        src={button.icon}
                        alt=""
                        width={18}
                        height={18}
                        className={styles.button_icon}
                      />
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className={styles.right_column}>
            <div className={styles.preview_cards}>
              <div className={`${styles.preview_card} ${styles.card_1}`}>
                <div className={styles.card_gradient}></div>
                <div className={styles.card_content}>
                  <h3>WordPress</h3>
                  <p>Custom CMS Solutions</p>
                </div>
              </div>
              <div className={`${styles.preview_card} ${styles.card_2}`}>
                <div className={styles.card_gradient}></div>
                <div className={styles.card_content}>
                  <h3>E-Commerce</h3>
                  <p>High-Converting Stores</p>
                </div>
              </div>
              <div className={`${styles.preview_card} ${styles.card_3}`}>
                <div className={styles.card_gradient}></div>
                <div className={styles.card_content}>
                  <h3>Custom Web</h3>
                  <p>Scalable Platforms</p>
                </div>
              </div>
              <div className={`${styles.preview_card} ${styles.card_4}`}>
                <div className={styles.card_gradient}></div>
                <div className={styles.card_content}>
                  <h3>Landing Pages</h3>
                  <p>Conversion Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

