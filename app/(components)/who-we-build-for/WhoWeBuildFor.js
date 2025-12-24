import React from "react";
import styles from "./WhoWeBuildFor.module.scss";
import Button from "@/app/(components)/button/Button";

export default function WhoWeBuildFor({ data }) {
  return (
    <section className={styles.who_we_build_for}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <div className={styles.heading_wrapper}>
            <h2>{data.heading}</h2>
            <p>{data.description}</p>
          </div>

          <ul className={styles.audience_list}>
            {data.audiences.map((audience, index) => (
              <li key={index}>{audience}</li>
            ))}
          </ul>

          {data.closingText && (
            <p className={styles.closing_text}>{data.closingText}</p>
          )}

          {data.buttons && data.buttons.length > 0 && (
            <div className={styles.buttons_wrapper}>
              {data.buttons.map((button, index) => (
                <Button key={index} href={button.link} icon={button.icon}>
                  {button.text}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

