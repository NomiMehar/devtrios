import React from "react";
import Image from "next/image";
import styles from "./WhyTrustForMobile.module.scss";

export default function WhyTrustForMobile({ data }) {
  if (!data) {
    return null;
  }

  return (
    <section className={styles.why_trust_for_mobile}>
      <div className="container">
        <div className={styles.content_wrapper}>
          {/* Left Column - Text Content */}
          <div className={styles.left_column}>
            <h2 className={styles.heading}>{data.heading}</h2>
            <p className={styles.tagline}>{data.tagline}</p>
            
            <ul className={styles.trust_list}>
              {data.features && data.features.map((feature, index) => (
                <li key={index} className={styles.trust_item}>
                  <div className={styles.icon_wrapper}>
                    <div className={styles.icon_circle}>
                      <Image
                        src={data.iconPath || "/assets/images/services/ios-trust-icon.svg"}
                        alt=""
                        width={24}
                        height={24}
                        className={styles.icon_image}
                      />
                    </div>
                  </div>
                  <p className={styles.feature_text}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className={styles.right_column}>
            <div className={styles.image_wrapper}>
              <Image
                src={data.imagePath || "/assets/images/services/ios-trusts.png"}
                alt="Mobile App Development"
                width={800}
                height={600}
                className={styles.trust_image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
