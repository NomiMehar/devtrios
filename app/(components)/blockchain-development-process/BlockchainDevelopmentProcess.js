"use client";

import React from "react";
import Image from "next/image";
import styles from "./BlockchainDevelopmentProcess.module.scss";
import processList from "./BlockchainDevelopmentProcessList.json";

const defaultProcess = {
  heading: "Our Smart Contract Development Process",
  description: "Our process is designed to minimise risk and ensure predictable delivery for blockchain applications.",
  steps: processList.smart_contract_development?.steps ?? []
};

export default function BlockchainDevelopmentProcess({ data }) {
  const process = data && data.steps ? data : defaultProcess;
  const steps = process.steps || [];

  return (
    <section className={styles.blockchain_development_process}>
      <div className="container">

        <div className={styles.heading_area}>
          <h2 className={styles.heading}>{process.heading}</h2>
          <p className={styles.description}>
            {process.description}
          </p>
        </div>

        <div className={styles.timeline}>
          {steps.map((item, i) => (
            <div className={styles.step} key={i}>
              <div className={styles.icon_card}>
                <div className={styles.icon_inner}>
                  <Image src={item.icon} alt="" width={40} height={40} />
                </div>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}