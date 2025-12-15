import React from "react";
import styles from "./OurServices.module.scss";
import Link from "next/link";
import Button from "@/app/(components)/button/Button";
import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description:
      "High-performance websites built with tools like Next.js, React.js, PHP, and cloud hosting solutions like AWS.",
    image: "/assets/images/home/web-development.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "Mobile App Development",
    description:
      "Custom mobile apps for iOS and Android tailored to enhance user experiences.",
    image: "/assets/images/home/mobile-app.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "Software Development",
    description:
      "Scalable software solutions using Node.js, Laravel, and other powerful frameworks.",
    image: "/assets/images/home/ui-ux.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "UI/UX Design",
    description: "Creating user-centered, engaging digital experiences.",
    image: "/assets/images/home/ai-blockchain.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "Staff Augmentation",
    description:
      "Utilize artificial intelligence to automate business processes, enhance decision-making, and improve efficiency.",
    image: "/assets/images/home/cloud-devops.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "AI/ML",
    description:
      "Utilize artificial intelligence to automate business processes, enhance decision-making, and improve efficiency.",
    image: "/assets/images/home/cloud-devops.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "Blockchain Development",
    description:
      "Implement secure, decentralized blockchain solutions that increase transparency and drive innovation.",
    image: "/assets/images/home/cloud-devops.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "Cloud Services",
    description:
      "Unlock the power of the cloud with our comprehensive solutions, all while minimizing management and operational costs. Explore our cloud solutions today.",
    image: "/assets/images/home/cloud-devops.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "SEO",
    description:
      "Enhance website visibility and improve rankings on search engines to drive organic traffic.",
    image: "/assets/images/home/cloud-devops.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
  {
    title: "Mobile App Mangement",
    description:
      "Develop and execute strategies that ensure seamless performance, enhance user experience, and maintain the reliability of your app.",
    image: "/assets/images/home/cloud-devops.svg",
    button: {
      text: "Read More",
      link: "/services",
      icon: "/assets/images/home/arrow-circle-right.webp",
    },
  },
];

export default function OurServices() {
  return (
    <div className={styles.our_services}>
      <div className="container">
        <div className={styles.servicesGrid}>
          <div className={styles.firstRow}>
            <div className={styles.topSection}>
              <h2>Our Services</h2>
              <p>
                Devtrios, a London-based agency, delivers web, app, and software
                development, plus e-commerce, UI/UX, SEO, local SEO, cloud, and
                CRM solutions to help businesses scale.
              </p>
            </div>

            {services.slice(0, 2).map((service, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.block}>
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
                <Button href={service.button.link} icon={service.button.icon}>
                  {service.button.text}
                </Button>
              </div>
            ))}
          </div>

          <div className={styles.secondRow}>
            {services.slice(2).map((service, idx) => (
              <div key={idx + 2} className={styles.card}>
                <div className={styles.block}>
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
                <Button href={service.button.link} icon={service.button.icon}>
                  {service.button.text}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
