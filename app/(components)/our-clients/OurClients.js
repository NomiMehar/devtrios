import React from "react";
import styles from "./OurClients.module.scss";
import Link from "next/link";
import Image from "next/image";

const reviewPlatforms = [
  {
    name: "Google",
    img: "/assets/images/home/Gogole-Business-Listing-Logo.webp",
    url: "https://www.google.com/search?sca_esv=d1d26e03a6da53f6&sxsrf=AE3TifMKiVNs2qN1iSdXBkqu7h4luRu6QQ:1759799692067&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-ZHDeuibvT5ivEKOauE2XsUi9mQKBAOuAqIfwX0s719zHpohfmMZ4XAw9UQnoS0oDQ8IMCeaFcgxVLW2xXgKaLTXT5qvL_wjqnCoiN6rA_6a06Zy9LXmZa4p6yNVDLBn1BSkBo%3D&q=Devtrios+%7C+Web+%26+App+Development+Reviews&sa=X&ved=2ahUKEwi14JXc9JCQAxXmFlkFHSAJF1sQ0bkNegQIMBAE&cshid=1759799711891924&biw=1600&bih=699&dpr=1.2",
  },
  {
    name: "Yell",
    img: "/assets/images/home/Yell_Logo.png",
    url: "https://www.yell.com/biz/devtrios-london-10964943/",
  },
  {
    name: "Clutch",
    img: "/assets/images/home/clutch-logo.png",
    url: "https://clutch.co/profile/devtrios",
  },
  {
    name: "GoodFirms",
    img: "/assets/images/home/Goodfirms-Logo.png",
    url: "https://www.goodfirms.co/company/devtrios",
  },
  {
    name: "DesignRush",
    img: "/assets/images/home/designrush-new-logo.png",
    url: "https://www.designrush.com/agency/profile/devtrios",
  },
  {
    name: "Tech Behemoths",
    img: "/assets/images/home/techbehemoths.svg",
    url: "https://techbehemoths.com/company/devtrios",
  },
  {
    name: "Sortlist",
    img: "/assets/images/home/sotlist.png",
    url: "https://www.sortlist.co.uk/agency/devtrios",
  },
];

export default function OurClients() {
  return (
    <div className={styles.our_clients}>
      <div className="container">
        <div className={styles.content_wrapper}>
          <h4 className={styles.heading}>Where Our Clients Rate Us 5 Stars</h4>

          <div className={styles.inner_content}>
            <div className={styles.left_side}>
              <div className="flex">
                <img
                  src="/assets/images/home/office-man-handshake-with-business.jpg"
                  alt="Client meeting"
                  className={styles.client_img}
                />
                <div>
                  <p>
                    Our clients don’t just work with us, they recommend us.
                    Devtrios is consistently rated 5.0 stars across trusted
                    platforms like Google, Clutch, and Yell. Independent reviews
                    highlight our technical expertise, clear communication, and
                    reliable delivery. See what business leaders are saying
                    about us.
                  </p>
                  <Link href="/our-services" className={styles.services_link}>
                    Our Services &rarr;
                  </Link>
                </div>
              </div>

              <div className={styles.client_satisfaction}>
                <span>Client Satisfaction</span>
                <div className={styles.progress_bar}>
                  <div className={styles.progress_fill}>100%</div>
                </div>
              </div>
            </div>

            <div className={styles.right_side}>
              {reviewPlatforms.map((platform, idx) => (
                <Link
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platform}
                >
                  <Image
                    width={100}
                    height={100}
                    src={platform.img}
                    alt={platform.name}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
