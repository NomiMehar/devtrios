"use client";

import styles from "./ServiceBanner.module.scss";
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";

export default function ServiceBanner({ data }) {

  return (
    <>
      <section className={styles.service_banner}>
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.top_section}>
              {data.badge && (
                <div className={styles.badge}>
                  {data.badge.icon && (
                    <Image
                      src={data.badge.icon}
                      alt=""
                      width={1000}
                      height={1000}
                      className={styles.badge_icon}
                    />
                  )}
                  <span>{data.badge.text}</span>
                </div>
              )}

              <div className={styles.heading_block}>
                <h1>
                  <span className={styles.title_highlight}>
                    {data.titleStart}
                  </span>{" "}
                  {data.titleEnd}
                </h1>
              </div>

              <div className={styles.description_block}>
                <p>{data.description}</p>
              </div>

              {data.buttons && data.buttons.length > 0 && (
                <div className={styles.buttons_wrapper}>
                  {data.buttons.map((button, index) => (
                    <Link
                      key={index}
                      href={button.link}
                      className={`${styles.cta_button} ${index === 0 ? styles.primary : styles.secondary
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
          </div>
        </div>
      </section>
      <div className={styles.overview_section}>
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.top_section}>
              <h2>Overview</h2>
              <h3>{data.overview}</h3>
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
              {data.overviewList && data.overviewList.length > 0 && (
                <ul className={styles.overview_grid}>
                  {data.overviewList.map(({ overViewImage, overViewCount, overViewSign, overViewDescription }, index) => {
                    return (
                      <li key={`overview-${index}`}>
                        <figure>
                          <Image src={overViewImage} alt={overViewImage} width="30" height="30" />
                        </figure>
                        <section>
                          <span>
                            <CountUp
                              end={overViewCount}
                              duration={2}
                              enableScrollSpy
                              scrollSpyOnce
                            >
                              {({ countUpRef }) => <small ref={countUpRef} />}
                            </CountUp>
                            {overViewSign}
                          </span>
                          <p>{overViewDescription}</p>
                        </section>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
