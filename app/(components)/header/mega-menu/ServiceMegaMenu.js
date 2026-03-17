import style from "./megaMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const serviceItems = [
  {
    id: 0,
    title: "AI & Automation",
    link: "/services/ai-automation/",
    icon: "/assets/images/header/nav-icon-4.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "AI & Automation",
        items: [
          { name: "AI Chatbots", link: "/services/ai-chatbots/" },
          { name: "AI Agents", link: "/services/ai-agents/" },
          { name: "Agentic AI", link: "/services/agentic-ai/" },
          {
            name: "LLM Development",
            link: "/services/llm-development/",
          },
          {
            name: "Automation & Workflow Engineering",
            link: "/services/automation-workflows/",
          },
          {
            name: "Generative AI",
            link: "/services/generative-ai/",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Blockchain Development",
    link: "/services/blockchain-development/",
    icon: "/assets/images/header/nav-icon-5.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Blockchain Development",
        items: [
          {
            name: "Smart Contract Development",
            link: "/services/smart-contract-development/",
          },
          {
            name: "Web3 App Development",
            link: "/services/web3-app-development/",
          },
          {
            name: "NFT Development",
            link: "/services/nft-development/",
          },
          {
            name: "Crypto Wallet Development",
            link: "/services/wallet-integration/",
          },
          {
            name: "Smart Contract Audit",
            link: "/services/smart-contract-audits/",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    link: "/services/mobile-app-development/",
    icon: "/assets/images/header/nav-icon-2.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Mobile App Development",
        items: [
          {
            name: "iOS App Development",
            link: "/services/ios-app-development/",
          },
          {
            name: "Android App Development",
            link: "/services/android-app-development/",
          },
          {
            name: "Flutter App Development",
            link: "/services/flutter-app-development/",
          },
          {
            name: "App UI/UX",
            link: "/services/app-ui-ux/",
          },
          {
            name: "App Maintenance",
            link: "/services/app-maintenance/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Software Development",
    link: "/services/software-development/",
    icon: "/assets/images/header/nav-icon-3.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Software Development",
        items: [
          {
            name: "Custom Software Development",
            link: "/services/custom-software-development/",
          },
          {
            name: "Web App Development",
            link: "/services/web-app-development/",
          },
          {
            name: "SaaS Development",
            link: "/services/saas-development/",
          },
          {
            name: "MVP Development",
            link: "/services/mvp-development/",
          },
          {
            name: "API Development",
            link: "/services/api-development/",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Website Development",
    link: "/services/website-development/",
    icon: "/assets/images/header/nav-icon-1.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "Website Development",
        items: [
          {
            name: "WordPress Development",
            link: "/services/wordpress-development/",
          },
          {
            name: "Shopify Development",
            link: "/services/shopify-development/",
          },
          {
            name: "E-Commerce Website Development",
            link: "/services/ecommerce-website-development/",
          },
          {
            name: "Landing Page Development",
            link: "/services/landing-page-development/",
          },
          {
            name: "Website Maintenance",
            link: "/services/website-maintenance/",
          },
          {
            name: "Custom Website Development",
            link: "/services/custom-website-development/",
          },
          {
            name: "Webflow Development",
            link: "/services/webflow-development/",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "UI & UX Design",
    link: "/services/ui-ux-design/",
    icon: "/assets/images/header/nav-icon-6.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "UI & UX Design",
        items: [
          { name: "UX Research", link: "/services/ux-research/" },
          { name: "UI Design", link: "/services/ui-design/" },
          { name: "UX Audit", link: "/services/ux-audit/" },
          {
            name: "Wireframing & Prototyping",
            link: "/services/wireframes-prototypes/",
          },
          { name: "Design Systems", link: "/services/design-system/" },
          { name: "Product Design", link: "/services/product-design/" },
          {
            name: "Social Media Marketing",
            link: "/services/social-media-marketing/",
          },
          {
            name: "Social Media Management",
            link: "/services/social-media-management/",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "SEO",
    link: "/services/seo/",
    icon: "/assets/images/header/nav-icon-7.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "SEO",
        items: [
          { name: "Technical SEO", link: "/services/technical-seo/" },
          { name: "Local SEO", link: "/services/local-seo/" },
          { name: "SEO Audit", link: "/services/seo-audit/" },
          { name: "On-Page SEO", link: "/services/on-page-seo/" },
          { name: "Off-page SEO", link: "/services/off-page/" },
          { name: "E-Commerce SEO", link: "/services/e-commerce-seo/" },
          { name: "Link Building", link: "/services/link-building/" },
          {
            name: "SEO Migration Services",
            link: "/services/seo-migration/",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "CRM Development",
    link: "/services/crm-development/",
    icon: "/assets/images/header/nav-icon-3.svg",
    service_img:
      "/assets/images/services/website_development_about_services.webp",
    sections: [
      {
        title: "CRM Development",
        items: [
          {
            name: "CRM Implementation",
            link: "/services/crm-implementation/",
          },
          {
            name: "ERP Development Services",
            link: "/services/erp-development/",
          },
          {
            name: "Custom CRM",
            link: "/services/crm-customization/",
          },
          {
            name: "CRM Integration",
            link: "/services/crm-integration/",
          },
          {
            name: "CRM Automation & AI",
            link: "/services/crm-automation-ai/",
          },
        ],
      },
    ],
  }
];

export default function ServiceMegaMenu({ onClick }) {
  return (
    <ul className={`list-none ${style.mega_menu_wrapper}`}>
      <li>
        <div className={style.mega_menu_wrp}>
          {/* LEFT SIDE */}
          <div className={style.menu_left}>
            <div className={style.menu_blocks}>
              {serviceItems.map((service) => (
                <div key={service.id} className={style.menu_links_wrp}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={42}
                    height={42}
                    className={style.sub_menu_icon}
                  />

                  <Link href={service.link} className={style.menu_heading}>
                    {service.title}
                  </Link>

                  <ul>
                    {service.sections[0].items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.link}
                          className={
                            item.link === "/services/social-media-marketing/"
                              ? style.bold_link
                              : ""
                          }
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={style.menu_right}>
            <div className={style.expertise_and_solutions}>
              <div className={style.side_menu_links_wrp}>
                <h2 className={style.menu_heading}>Solutions</h2>
                <ul>
                  <li>
                    <Link href="#">Shopify</Link>
                  </li>
                  <li>
                    <Link href="#">AWS</Link>
                  </li>
                  <li>
                    <Link href="#">Salesforce</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.whats_new}>
              <h2 className={style.menu_heading}>What’s New?</h2>
              <div className={style.featured_box}>
                <h3>Award Winning Agency</h3>
                <Link href="https://techbehemoths.com/awards-2025/certificates/389f4be7-21b0-4f0c-92e7-dcf7c8260b01" target="_blank">
                <Image
                  src="/assets/images/header/winner.png"
                  alt="Webinar"
                  width={1000}
                  height={1000}
                />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}
