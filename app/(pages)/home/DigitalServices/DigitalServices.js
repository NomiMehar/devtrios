import React from "react";
import styles from "./DigitalServices.module.scss";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Custom Web Development Services",
    description:
      "High-performance websites built with tools like Next.js, React.js, PHP, and cloud hosting solutions like AWS.",
    image: "/assets/images/home/web-development.webp",
  },
  {
    title: "Mobile App Development in London",
    description:
      "Custom mobile apps for iOS and Android tailored to enhance user experiences.",
    image: "/assets/images/home/mobile-app.webp",
  },
  {
    title: "UI/UX Design for Startups",
    description: "Creating user-centered, engaging digital experiences",
    image: "/assets/images/home/ui-ux.webp",
  },
  {
    title: "AI & Blockchain Development Agency",
    description:
      "Utilize artificial intelligence to automate business processes, enhance decision-making, and improve efficiency.",
    image: "/assets/images/home/ai-blockchain.webp",
  },
  {
    title: "Cloud Services & DevOps UK",
    description:
      "Unlock the power of the cloud with our comprehensive solutions, all while minimizing management and operational costs. Explore our cloud solutions today.",
    image: "/assets/images/home/cloud-devops.webp",
  },
];

export default function DigitalServices() {
  return (
    <div className={styles.digital_services}>
      <div className="container">
        <div className={styles.servicesGrid}>
          <div className={styles.firstRow}>
            <div className={styles.topSection}>
              <button className={styles.ctaButton}>
                <Image
                  src="/assets/images/home/stars.webp"
                  alt="star"
                  width={15}
                  height={15}
                />
                Let’s Build Something
              </button>
              <h2>Our Full-Stack Digital Services</h2>
            </div>

            {services.slice(0, 2).map((service, idx) => (
              <div key={idx} className={styles.card}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className={styles.icon}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.secondRow}>
            {services.slice(2).map((service, idx) => (
              <div key={idx + 2} className={styles.card}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={100}
                  height={100}
                  className={styles.icon}
                />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}

            <Link href="/services" className={styles.viewAll}>
              <span>→</span>
              <p>View All Services</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
