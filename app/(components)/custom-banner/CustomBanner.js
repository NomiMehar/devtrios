import React from "react";
import styles from "./CustomBanner.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function CustomBanner({
  title,
  description,
  buttons,
  background,
  isLongContent = false,
}) {
  return (
    <React.Fragment>
      <div
        className={`${styles.custom_banner} ${isLongContent ? styles.long_content : ""}`}
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className={styles.content_wrapper}>
            <div className={styles.block}>
              <h1>{title}</h1>
            </div>

            <div className={styles.block}>
              <p>{description}</p>

              <div className={styles.banner_content_btn}>
                {buttons?.map((btn, index) => (
                  <Link key={index} href={btn.link}>
                    {btn.icon && (
                      <Image src={btn.icon} alt="" width={18} height={18} />
                    )}
                    {btn.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
