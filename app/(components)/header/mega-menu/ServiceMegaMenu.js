import style from "./megaMenu.module.scss";
import Link from "next/link";
import Image from "next/image";

const serviceItems = [
  {
    title: "Website Development",
    href: "/services/website-development/",
    items: [
      {
        label: "WordPress Development",
        href: "/services/website-development/wordpress-development/",
      },
      {
        label: "Shopify Development",
        href: "/services/website-development/shopify-development/",
      },
      {
        label: "E-Commerce Website Development",
        href: "/services/website-development/ecommerce-website-development/",
      },
      {
        label: "Landing Page Development",
        href: "/services/website-development/landing-page-development/",
      },
      {
        label: "Website Maintenance",
        href: "/services/website-development/website-maintenance/",
      },
      {
        label: "Custom Website Development",
        href: "/services/website-development/custom-website-development/",
      },
      {
        label: "Webflow Development",
        href: "/services/website-development/webflow-development/",
      },
    ],
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-app-development/",
    items: [
      {
        label: "iOS App Development",
        href: "/services/mobile-app-development/ios-app-development/",
      },
      {
        label: "Android App Development",
        href: "/services/mobile-app-development/android-app-development/",
      },
      {
        label: "Flutter App Development",
        href: "/services/mobile-app-development/flutter-app-development/",
      },
      {
        label: "App UI/UX",
        href: "/services/mobile-app-development/app-ui-ux/",
      },
      {
        label: "App Maintenance",
        href: "/services/mobile-app-development/app-maintenance/",
      },
    ],
  },
  {
    title: "Software Development",
    href: "/services/software-development/",
    items: [
      {
        label: "Custom Software Development",
        href: "/services/software-development/custom-software-development/",
      },
      {
        label: "Web App Development",
        href: "/services/software-development/web-app-development/",
      },
      {
        label: "SaaS Development",
        href: "/services/software-development/saas-development/",
      },
      {
        label: "MVP Development",
        href: "/services/software-development/mvp-development/",
      },
      {
        label: "API Development",
        href: "/services/software-development/api-development/",
      },
    ],
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation/",
    items: [
      { label: "AI Chatbots", href: "/services/ai-automation/ai-chatbots/" },
      {
        label: "LLM Development",
        href: "/services/ai-automation/llm-development/",
      },
      {
        label: "Automation & Workflow Engineering",
        href: "/services/ai-automation/automation-workflows/",
      },
      {
        label: "Generative AI",
        href: "/services/ai-automation/generative-ai/",
      },
    ],
  },
  {
    title: "Blockchain Development",
    href: "/services/blockchain-development/",
    items: [
      {
        label: "Smart Contract Development",
        href: "/services/blockchain-development/smart-contract-development/",
      },
      {
        label: "Web3 App Development",
        href: "/services/blockchain-development/web3-app-development/",
      },
      {
        label: "NFT Development",
        href: "/services/blockchain-development/nft-development/",
      },
      {
        label: "Crypto Wallet Development",
        href: "/services/blockchain-development/wallet-integration/",
      },
      {
        label: "Smart Contract Audit",
        href: "/services/blockchain-development/smart-contract-audits/",
      },
    ],
  },
  {
    title: "UI & UX Design",
    href: "/services/ui-ux-design/",
    items: [
      { label: "UX Research", href: "/services/ui-ux-design/ux-research/" },
      { label: "UI Design", href: "/services/ui-ux-design/ui-design/" },
      { label: "UX Audit", href: "/services/ui-ux-design/ux-audit/" },
      {
        label: "Wireframing & Prototyping",
        href: "/services/ui-ux-design/wireframes-prototypes/",
      },
    ],
  },
  {
    title: "Digital Marketing",
    href: "/services/seo/",
    items: [
      { label: "SEO", href: "/services/seo/" },
      { label: "Technical SEO", href: "/services/seo/technical-seo/" },
      { label: "Local SEO", href: "/services/seo/local-seo/" },
      { label: "SEO Audit", href: "/services/seo/seo-audit/" },
      { label: "E-Commerce SEO", href: "/services/seo/ecommerce-seo/" },
      { label: "Link Building", href: "/services/seo/link-building/" },
      {
        label: "Social Media Marketing",
        href: "/services/digital-marketing/social-media-marketing/",
      },
      {
        label: "Social Media Management",
        href: "/services/digital-marketing/social-media-management/",
      },
    ],
  },
];

export default function ServiceMegaMenu({ onClick }) {
  const handleMouseEnter = () => document.body.classList.add("hovered");
  const handleMouseLeave = () => document.body.classList.remove("hovered");

  return (
    <ul className={`list-none ${style.mega_menu_wrapper}`}>
      <div className={style.mega_menu_inner}>
        {serviceItems.map((service, index) => (
          <div className={style.column} key={index}>
            <Link
              href={service.href}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={style.title}
            >
              {service.title}
            </Link>

            <ul className={style.list}>
              {service.items.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ul>
  );
}
