import React from "react";
import styles from "./FeaturedCase.module.scss";
import Image from "next/image";
import Button from "@/app/(components)/button/Button";

import data from "@/app/(pages)/home/FeaturedCase/FeaturedCaseList.json";

export default function FeaturedCase() {
  return (
    <section className={styles.featured_case}>
      <div className="container">
        <h2 className={styles.heading}>Featured Case</h2>
        <div className={styles.grid}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>

              <div className={styles.content_wrapper}>
                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className={styles.impact}>
                    <h4>{item.impactTitle}</h4>

                    <ul>
                      {item.impactPoints.map((point, i) => (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      ))}
                    </ul>
                  </div>
                </div>

                <Button href={item.button.link} icon={item.button.icon}>
                  {item.button.text}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
