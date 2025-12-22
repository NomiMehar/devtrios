import React from "react";
import Image from "next/image";
import styles from "./WhyChooseUs.module.scss";
import data from "./WhyChooseUsList.json";

export default function WhyChooseUs() {
  const icons = [
    "/assets/images/services/web-dev-expertise-1.svg",
    "/assets/images/services/web-dev-expertise-2.svg",
    "/assets/images/services/web-dev-expertise-3.svg",
    "/assets/images/services/web-dev-expertise-4.svg",
    "/assets/images/services/web-dev-expertise-1.svg"
  ];

  return (
    <div className={styles.why_choose_us}>
      <div className="container">
        <div className={styles.section_wrapper}>
          <div className={styles.section_header}>
            <h2>{data.heading.title}</h2>
            <p>{data.heading.description}</p>
          </div>

          <div className={styles.content_layout}>
            <div className={styles.left_cards}>
              {data.features.slice(0, 2).map((feature, index) => (
                <div key={index} className={styles.feature_card}>
                  <div className={styles.icon_wrapper}>
                    <Image
                      src={icons[index] || icons[0]}
                      alt={feature.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.card_content}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.central_image}>
              <div className={styles.image_wrapper}>
                <Image
                  src="/assets/images/services/fullstack-back.webp"
                  alt="WordPress Development"
                  width={600}
                  height={800}
                  className={styles.main_image}
                />
                <div className={styles.image_overlay}></div>
              </div>
            </div>

            <div className={styles.right_cards}>
              {data.features.slice(2, 4).map((feature, index) => (
                <div key={index + 2} className={styles.feature_card}>
                  <div className={styles.icon_wrapper}>
                    <Image
                      src={icons[index + 2] || icons[0]}
                      alt={feature.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles.card_content}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {data.features[4] && (
            <div className={styles.center_card}>
              <div className={styles.feature_card}>
                <div className={styles.icon_wrapper}>
                  <Image
                    src={icons[4] || icons[0]}
                    alt={data.features[4].title}
                    width={40}
                    height={40}
                  />
                </div>
                <div className={styles.card_content}>
                  <h4>{data.features[4].title}</h4>
                  <p>{data.features[4].description}</p>
                </div>
              </div>
            </div>
          )}

          <div className={styles.closing_text}>
            <p>{data.closing}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


