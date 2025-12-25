import React from "react";
import styles from "./ServiceList.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ServiceList({ data }) {
  return (
    <section className={styles.service_list}>
      <div className="container">
        <div className={styles.heading_wrapper}>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className={styles.services_list}>
          {data.services.map((service, index) => {
            const isLastCard = index === data.services.length - 1;
            const totalCards = data.services.length;
            const isSingleInLastRow = totalCards % 3 === 1 && isLastCard;
            
            return (
            <Link 
              key={index} 
              href={service.link || '#'} 
              className={`${styles.service_item} ${isSingleInLastRow ? styles.last_card_span : ''}`}
            >
              <div className={styles.service_icon_wrapper}>
                {service.icon && (
                  <div className={styles.icon_container}>
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={56}
                      height={56}
                      className={styles.service_icon}
                    />
                  </div>
                )}
              </div>
              <div className={styles.service_content}>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                {(service.idealFor || service.builtFor || service.bestFor || service.ideal) && (
                  <div className={styles.target_badge}>
                    <span className={styles.badge_text}>
                      {service.idealFor || service.builtFor || service.bestFor || service.ideal}
                    </span>
                  </div>
                )}
                <div className={styles.service_footer}>
                  <span className={styles.link_text}>{service.linkText}</span>
                  <div className={styles.arrow_circle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

