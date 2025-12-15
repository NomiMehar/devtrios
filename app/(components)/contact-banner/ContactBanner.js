import React from "react";
import styles from "./ContactBanner.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ContactBanner({ title, description, buttons }) {
  return (
    <React.Fragment>
      <div className={styles.contact_banner}>
        <div className="container">
          <div className={styles.content_wrapper}>
            <h1>{title}</h1>
            <p>{description}</p>
            {buttons && (
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
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
