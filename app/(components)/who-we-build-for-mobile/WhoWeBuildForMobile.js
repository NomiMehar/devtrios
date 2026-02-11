"use client";

import React from "react";
import Image from "next/image";
import styles from "./WhoWeBuildForMobile.module.scss";

export default function WhoWeBuildForMobile({ data }) {
  if (!data) {
    return null;
  }

  return (
    <section className={styles.who_we_build_for_mobile}>
      <div className="container">
          <div className={styles.heading_wrapper}>
            <h2 dangerouslySetInnerHTML={{ __html: data.heading }} />
            <p>{data.description}</p>
          </div>
        <div className={styles.content_wrapper}>

          <div className={styles.mobile_section}>
            {/* Spinning Circle Background */}
            <div className={styles.spinning_circle}></div>

            {/* Mobile Image */}
            <div className={styles.mobile_image_wrapper}>
              <Image
                src={data.mobileImage || "/assets/images/services/ios-service-1.webp"}
                alt="Mobile App"
                width={300}
                height={600}
                className={styles.mobile_image}
                priority
              />
            </div>

            {/* Floating Text Boxes */}
            {data.audiences && data.audiences.map((audience, index) => {
              const positions = [
                { top: "10%", left: "5%", animationDelay: "0s", className: styles.box_1 },
                { top: "15%", right: "5%", animationDelay: "0.2s", className: styles.box_2 },
                { bottom: "25%", left: "8%", animationDelay: "0.4s", className: styles.box_3 },
                { bottom: "20%", right: "8%", animationDelay: "0.6s", className: styles.box_4 },
                { bottom: "5%", left: "50%", animationDelay: "0.8s", className: styles.box_5 }
              ];
              
              const position = positions[index] || positions[0];
              const audienceText = typeof audience === 'string' ? audience : audience.text;
              const audienceIcon = typeof audience === 'object' && audience.icon ? audience.icon : null;
              return (
                <div
                  key={index}
                  className={`${styles.floating_box} ${position.className}`}
                  style={{
                    animationDelay: position.animationDelay
                  }}
                >
                  <div className={styles.box_icon}>
                      <img
                        src={audienceIcon}
                        alt="Audience Icon"
                        width={1000}
                        height={1000}
                        className={styles.icon_image}
                      />
                    
                  </div>
                  <p className={styles.box_text}>{audienceText}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
