import React from "react";
import styles from "./DevelopmentExpertise.module.scss";
import Button from "@/app/(components)/button/Button";
import Image from "next/image";
import data from "./DevelopmentExpertiseList.json";

export default function DevelopmentExpertise() {
  return (
    <div className={styles.development_expertise}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading_wrapper}>
            <h2>{data.heading.title}</h2>
            <div className={styles.block}>
              <p
                dangerouslySetInnerHTML={{ __html: data.heading.description }}
              />
              {data.heading.button && (
                <div className={styles.button_wrapper}>
                  <Button
                    href={data.heading.button.href}
                    icon={data.heading.button.icon}
                  >
                    {data.heading.button.text}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.content_wrapper}>
            {data.values.map((item, index) => (
              <div className={styles.block} key={index}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
