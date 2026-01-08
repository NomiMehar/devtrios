import React from "react";
import styles from "./WhoWeBuildFor.module.scss";
import Button from "@/app/(components)/button/Button";
import Image from "next/image";

export default function WhoWeBuildFor({ data }) {
  return (
    <section className={styles.who_we_build_for}>
      <div className="container">
      <div className={styles.block_wrapper}>
      <div className={styles.content_wrapper}>
          <div className={styles.heading_wrapper}>
            <h2 dangerouslySetInnerHTML={{__html:data.heading}} />
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
        <div className={styles.image_wrapper}>
          <Image src="/assets/images/services/who-we-build.png" width={1000} height={1000} alt="who-we-build" />
        </div>
      </div>
      </div>
    </section>
  );
}

