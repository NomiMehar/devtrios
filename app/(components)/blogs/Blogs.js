import React from "react";
import styles from "./Blogs.module.scss";
import Image from "next/image";
import Button from "@/app/(components)/button/Button";
import data from "@/app/(components)/blogs/BlogsList.json";

export default function Blogs({ noPadding = false }) {
  return (
    <section
      className={`${styles.blogs} ${noPadding ? styles.no_padding_top : ""}`}
    >
      <div className="container">
        <h2 className={styles.heading}>Blogs</h2>
        <div className={styles.grid}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                />
              </div>

              <div className={styles.content_wrapper}>
                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p>{item.description}</p>
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
