import style from "./megaMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const serviceItems = [
  {
    id: 0,
    title: "Website Development",
    link: "/services/website-development/",
    icon: "/assets/images/header/menu-icon.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Website Development",
        items: [
          {
            name: "WordPress Development",
            link: "/services/website-development/wordpress-development/",
          },
          {
            name: "Shopify Development",
            link: "/services/website-development/shopify-development/",
          },
          {
            name: "E-Commerce Website Development",
            link: "/services/website-development/ecommerce-website-development/",
          },
          {
            name: "Landing Page Development",
            link: "/services/website-development/landing-page-development/",
          },
          {
            name: "Website Maintenance",
            link: "/services/website-development/website-maintenance/",
          },
          {
            name: "Custom Website Development",
            link: "/services/website-development/custom-website-development/",
          },
          {
            name: "Webflow Development",
            link: "/services/website-development/webflow-development/",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Mobile App Development",
    link: "/services/mobile-app-development/",
    icon: "/assets/images/header/menu-icon.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Mobile App Development",
        items: [
          {
            name: "iOS App Development",
            link: "/services/mobile-app-development/ios-app-development/",
          },
          {
            name: "Android App Development",
            link: "/services/mobile-app-development/android-app-development/",
          },
          {
            name: "Flutter App Development",
            link: "/services/mobile-app-development/flutter-app-development/",
          },
          {
            name: "App UI/UX",
            link: "/services/mobile-app-development/app-ui-ux/",
          },
          {
            name: "App Maintenance",
            link: "/services/mobile-app-development/app-maintenance/",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Software Development",
    link: "/services/software-development/",
    icon: "/assets/images/header/menu-icon.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Software Development",
        items: [
          {
            name: "Custom Software Development",
            link: "/services/software-development/custom-software-development/",
          },
          {
            name: "Web App Development",
            link: "/services/software-development/web-app-development/",
          },
          {
            name: "SaaS Development",
            link: "/services/software-development/saas-development/",
          },
          {
            name: "MVP Development",
            link: "/services/software-development/mvp-development/",
          },
          {
            name: "API Development",
            link: "/services/software-development/api-development/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "AI & Automation",
    link: "/services/ai-automation/",
    icon: "/assets/images/header/menu-icon.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "AI & Automation",
        items: [
          { name: "AI Chatbots", link: "/services/ai-automation/ai-chatbots/" },
          {
            name: "LLM Development",
            link: "/services/ai-automation/llm-development/",
          },
          {
            name: "Automation & Workflow Engineering",
            link: "/services/ai-automation/automation-workflows/",
          },
          {
            name: "Generative AI",
            link: "/services/ai-automation/generative-ai/",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Blockchain Development",
    link: "/services/blockchain-development/",
    icon: "/assets/images/header/menu-icon.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Blockchain Development",
        items: [
          {
            name: "Smart Contract Development",
            link: "/services/blockchain-development/smart-contract-development/",
          },
          {
            name: "Web3 App Development",
            link: "/services/blockchain-development/web3-app-development/",
          },
          {
            name: "NFT Development",
            link: "/services/blockchain-development/nft-development/",
          },
          {
            name: "Crypto Wallet Development",
            link: "/services/blockchain-development/wallet-integration/",
          },
          {
            name: "Smart Contract Audit",
            link: "/services/blockchain-development/smart-contract-audits/",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "UI & UX Design",
    link: "/services/ui-ux-design/",
    icon: "/assets/images/header/menu-icon.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "UI & UX Design",
        items: [
          { name: "UX Research", link: "/services/ui-ux-design/ux-research/" },
          { name: "UI Design", link: "/services/ui-ux-design/ui-design/" },
          { name: "UX Audit", link: "/services/ui-ux-design/ux-audit/" },
          {
            name: "Wireframing & Prototyping",
            link: "/services/ui-ux-design/wireframes-prototypes/",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Digital Marketing",
    link: "/services/seo/",
    icon: "/assets/images/header/menu-icon.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Digital Marketing",
        items: [
          { name: "SEO", link: "/services/seo/" },
          { name: "Technical SEO", link: "/services/seo/technical-seo/" },
          { name: "Local SEO", link: "/services/seo/local-seo/" },
          { name: "SEO Audit", link: "/services/seo/seo-audit/" },
          { name: "E-Commerce SEO", link: "/services/seo/ecommerce-seo/" },
          { name: "Link Building", link: "/services/seo/link-building/" },
          {
            name: "Social Media Marketing",
            link: "/services/digital-marketing/social-media-marketing/",
          },
          {
            name: "Social Media Management",
            link: "/services/digital-marketing/social-media-management/",
          },
        ],
      },
    ],
  },
];

export default function ServiceMegaMenu({ onClick }) {
  const [activeId, setActiveId] = useState(0);

  const handleMouseEnter = () => document.body.classList.add("hovered");
  const handleMouseLeave = () => document.body.classList.remove("hovered");

  return (
    <ul className={`list-none ${style.mega_menu_wrapper}`}>
      {serviceItems.map((service) => (
        <li key={service.id} className="flex">
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={activeId === service.id ? style.active : ""}
            onClick={() => setActiveId(service.id)}
            href="#"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={31}
              height={35}
            />
            {service.title}
          </Link>
          {activeId === service.id && (
            <div onClick={onClick} className={`flex ${style.mega_sub_menu}`}>
              {service.sections.map((section, index) => (
                <section key={index}>
                  <Link
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    href={service.link}
                  >
                    <span className={style.nav_title}>
                      {section.title}
                      <Image
                        src="/assets/images/header/arrow_link.svg"
                        alt={service.title}
                        width={31}
                        height={35}
                      />
                    </span>
                  </Link>
                  <div className={style.section_wrapper}>
                    <ul className="list-none">
                      {section.items.map((item, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            href={item.link}
                          >
                            <Image
                              src={service.icon}
                              alt={service.title}
                              width={30}
                              height={30}
                            />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className={style.service_img}>
                      <Image
                        src={service.service_img}
                        alt={service.title}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </section>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
