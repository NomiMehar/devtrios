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
              {data.buttons && data.buttons.length > 0 ? (
                data.buttons.map((button, index) => (
                  <Button 
                    key={index} 
                    href={button.href} 
                    icon={button.icon}
                    variant={index === 1 ? "secondary" : "primary"}
                  >
                    {button.text}
                  </Button>
                ))
              ) : (
                data.button && (
                  <Button href={data.button.href} icon={data.button.icon}>
                    {data.button.text}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
