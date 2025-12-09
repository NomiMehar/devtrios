import Link from "next/link";
import React from "react";
import style from "./Footer.module.scss";
import Image from "next/image";

// JSON data
const footerData = {
  company: {
    name: "Devtrios",
    logo: "/assets/images/footer/footer-logo.png",
    tagline:
      "Driving business growth through scalable digital solutions, from web and mobile apps to SEO and AI-powered platforms.",
    contact: {
      email: "info@devtrios.com",
      phone: "+44-7470 801776",
      address: "27 Old Gloucester Street, London WC1N 3AX, United Kingdom",
    },
  },
  menus: {
    core_solutions: [
      {
        title: "Custom Software Development",
        link: "https://devtrios.com/services/custom-software-development/",
      },
      {
        title: "Website Development",
        link: "https://devtrios.com/services/website-development/",
      },
      {
        title: "Mobile App Development",
        link: "https://devtrios.com/services/mobile-app-development/",
      },
      {
        title: "UI UX Design",
        link: "https://devtrios.com/services/ui-ux-design/",
      },
      {
        title: "AI Solution",
        link: "https://devtrios.com/services/ai-solution/",
      },
      {
        title: "Blockchain Development",
        link: "https://devtrios.com/services/blockchain-development/",
      },
      {
        title: "Cloud Services",
        link: "https://devtrios.com/services/cloud-services/",
      },
    ],
    seo_digital_marketing: [
      {
        title: "SEO & Digital Marketing",
        link: "https://devtrios.com/services/seo-digital-marketing/",
      },
      { title: "SEO", link: "https://devtrios.com/services/seo/" },
      {
        title: "Social Media Marketing",
        link: "https://devtrios.com/services/social-media-marketing/",
      },
    ],
    discover_devtrios: [
      { title: "Home", link: "/" },
      { title: "About Us", link: "/about" },
      { title: "Blog", link: "/blog" },
      { title: "Contact Us", link: "/contact" },
      { title: "Terms of Use", link: "/terms" },
      { title: "Privacy Policy", link: "/privacy" },
      { title: "Cookie Policy", link: "/cookie" },
    ],
  },
  socials: [
    {
      name: "facebook",
      link: "https://www.facebook.com/share/1BXgdxNpBu/?mibextid=wwXIfr",
    },
    { name: "twitter", link: "https://x.com/devtrios_uk?s=21" },
    { name: "linkedin", link: "https://www.linkedin.com/company/devtrios/" },
    {
      name: "youtube",
      link: "https://youtube.com/@devtrios?si=UgLlfm3ra99HDqY8",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/devtrios_uk?igsh=eWJmbXNwaWRodGZy&utm_source=qr",
    },
    { name: "pinterest", link: "https://uk.pinterest.com/devtrios/" },
    {
      name: "tiktok",
      link: "https://www.tiktok.com/@devtrios_uk?_t=ZG-8zlgpW9o1kv&_r=1",
    },
    { name: "x", link: "https://x.com/devtrios_uk?s=21" },
  ],
};

function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footer_container}>
          {/* Company Info */}
          <div className={style.footer_section}>
            <div className={style["footer-logo"]}>
              <Link href="/">
                <Image
                  src={footerData.company.logo}
                  alt="Devtrios"
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
            <p>{footerData.company.tagline}</p>
            <hr />
            <div className={style["footer-contact"]}>
              <p>
                <Image
                  src="/assets/images/footer/mail.svg"
                  alt="icons"
                  width={20}
                  height={20}
                />
                <Link href={`mailto:${footerData.company.contact.email}`}>
                  {footerData.company.contact.email}
                </Link>
              </p>
              <p>
                <Image
                  src="/assets/images/footer/phone.svg"
                  alt="icons"
                  width={20}
                  height={20}
                />
                <Link href={`tel:${footerData.company.contact.phone}`}>
                  {footerData.company.contact.phone}
                </Link>
              </p>
              <p>
                <Image
                  src="/assets/images/footer/location.svg"
                  alt="icons"
                  width={20}
                  height={20}
                />
                {footerData.company.contact.address}
              </p>
            </div>
          </div>

          {/* Core Solutions */}
          <div className={style.footer_section}>
            <h4>OUR CORE SOLUTIONS</h4>
            <ul>
              {footerData.menus.core_solutions
                .concat(footerData.menus.seo_digital_marketing)
                .map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Discover Devtrios */}
          <div className={style.footer_section}>
            <h4>DISCOVER DEVTRIOS</h4>
            <ul>
              {footerData.menus.discover_devtrios.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ratings & Socials */}
          <div className={style.footer_section}>
            <div className={style.ratings}>
              <Image
                src={`/assets/images/footer/ratings.svg`}
                alt="Devtrios"
                width={150}
                height={50}
              />
            </div>
            <h4>OUR SOCIALS</h4>
            <div className={style.socials}>
              {footerData.socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.socialIcon}
                >
                  <Image
                    src={`/assets/images/footer/${item.name}.svg`}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
            <div className={style.other_socials}>
              <Link
                href="https://clutch.co/profile/devtrios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/assets/images/footer/clutch.svg`}
                  alt="clutch"
                  width={1000}
                  height={1000}
                />
              </Link>
              <Link
                href="https://www.yell.com/biz/devtrios-london-10964943/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={`/assets/images/footer/yell.jpg`}
                  alt="yell"
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={style.footerBottom}>
        <p>© 2025 Devtrios. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
