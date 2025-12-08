import React from "react";
import styles from "./Cta.module.scss";
import Button from "@/app/(components)/button/Button";

export default function Cta({ data }) {
  return (
    <div className={styles.cta}>
      <div className="container">
        <div className={styles.cta_wrapper}>
          <div className={styles.content_wrapper}>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <div className={styles.button_wrapper}>
              <Button href={data.button.href} icon={data.button.icon}>
                {data.button.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
