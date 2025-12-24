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
          {data.services.map((service, index) => (
            <Link 
              key={index} 
              href={service.link || '#'} 
              className={`${styles.service_item} ${index % 2 === 0 ? styles.left_image : styles.right_image}`}
            >
              <div className={styles.service_image}>
                {service.image && (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.image}
                  />
                )}
                <div className={styles.image_gradient}></div>
              </div>
              <div className={styles.service_content}>
                <div className={styles.service_number}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                {(service.idealFor || service.builtFor || service.bestFor || service.ideal) && (
                  <div className={styles.target_badge}>
                    {(service.idealFor || service.builtFor || service.bestFor || service.ideal) && (
                      <span className={styles.badge_text}>
                        {service.idealFor || service.builtFor || service.bestFor || service.ideal}
                      </span>
                    )}
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
          ))}
        </div>
      </div>
    </section>
  );
}

