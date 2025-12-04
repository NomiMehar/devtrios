import style from "./megaMenu.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


const serviceItems = [
  {
    id: 0,
    title: "Innovation",
    icon: "/assets/images/header/innovation.svg",
    sections: [
      {
        title: "Mobility",
        items: [
          { name: "Mobile Development", link: "/services/innovation/mobility/mobile-development" },
          { name: "Android App Development", link: "/services/innovation/mobility/android-app-development" },
          { name: "IOS App Development", link: "/services/innovation/mobility/android-ios-development" },
          { name: "React Native App", link: "/services/innovation/mobility/react-native-development" },
          { name: "Ionic Development", link: "/services/innovation/mobility/ionic-development" },
          { name: "Support & Maintenance", link: "/support" },
        ],
      },
      {
        title: "Digital Transformation",
        items: [
          { name: "Web App Development", link: "/services/innovation/digital-transformation/web-development" },
          { name: "Bespoke Development", link: "/services/innovation/digital-transformation/bespoke-development" },
          { name: "SAAS Development", link: "/services/innovation/digital-transformation/saas-development" },
          { name: "MVP Development", link: "/services/innovation/digital-transformation/mvp-development" },
          { name: "Product Development", link: "/services/innovation/digital-transformation/product-development" },
          { name: "Cloud & DevOps", link: "/services/innovation/digital-transformation/cloud-devops" },
          { name: "Product Design", link: "/services/innovation/digital-transformation/product-design" },
          { name: "QA & Testing", link: "/services/innovation/digital-transformation/quality-assurance" },
          { name: "Enterprise Software Development", link: "/services/innovation/digital-transformation/enterprise-software-development" },
          { name: "Support & Maintenance", link: "/services/innovation/digital-transformation/support-maintenance" },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Next-Gen Tech",
    icon: "/assets/images/header/nextgen.svg",
    sections: [
      {
        title: "Blockchain",
        items: [
          { name: "Blockchain Development", link: "/services/next-gen-tech/blockchain/blockchain-development" },
          { name: "NFT Development", link: "/services/next-gen-tech/blockchain/nft-development" },
          { name: "NFT Marketplace", link: "/services/next-gen-tech/blockchain/nft-marketplace" },
          { name: "Smart Contract", link: "/services/next-gen-tech/blockchain/smart-contract-development" },
          { name: "Metaverse Development", link: "/services/next-gen-tech/blockchain/metaverse-development" },
          { name: "AR & VR", link: "/services/next-gen-tech/blockchain/ar-vr-development" },
          { name: "DeFi Development", link: "/services/next-gen-tech/blockchain/defi-developement" },
          { name: "DApp Development", link: "/services/next-gen-tech/blockchain/dapp-development" },
          { name: "Tokens & Crypto Wallets", link: "/services/next-gen-tech/blockchain/tokens-and-crypto-wallets" },
        ],
      },
      {
        title: "Gamification",
        items: [
          { name: "Mobile Game Development", link: "/services/next-gen-tech/gamification/mobile-game-development" },
          { name: "PC Game Development", link: "/services/next-gen-tech/gamification/pc-game-development" },
          { name: "2D/3D Game Development", link: "/services/next-gen-tech/gamification/2d-3d-game-development" },
          { name: "Unreal Engine Game Dev", link: "/services/next-gen-tech/gamification/unreal-game-development" },
          { name: "Unity Game Development", link: "/services/next-gen-tech/gamification/unity-game-development" },
          { name: "AR/VR & MR Game Development", link: "/services/next-gen-tech/gamification/ar-vr-mr-game-development" },
          { name: "AI Game Development", link: "/services/next-gen-tech/gamification/ai-game-development" },
          { name: "NFT Game Development", link: "/services/next-gen-tech/gamification/nft-game-development" },
          { name: "Blockchain Game Development", link: "/services/next-gen-tech/gamification/blockchain-game-development" },
          { name: "Metaverse Game Development", link: "/services/next-gen-tech/gamification/metaverse-game-development" },
          { name: "Full Cycle Game Development", link: "/services/next-gen-tech/gamification/full-cycle-game-development" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "AI & ML",
    icon: "/assets/images/header/growth.svg",
    sections: [
      {
        title: "AI & ML Development",
        items: [
          { name: "Generative AI Development", link: "/services/ai-ml/generative-ai-development" },
          { name: "AI & ML Development", link: "/services/ai-ml/ai-ml-development" },
          { name: "Data Engineering Services", link: "/services/ai-ml/data-engineering-services" },
          { name: "AI Consulting", link: "/services/ai-ml/ai-consulting" },
          { name: "AI PoC and AI MVP", link: "/services/ai-ml/ai-poc-mvp" },
          { name: "Chatbot Development", link: "/services/ai-ml/chatbot-development" },
          { name: "Computer Vision", link: "/services/ai-ml/computer-vision" },
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
            <Image src={service.icon} alt={service.title} width={31} height={35} />
            {service.title}
          </Link>
          {activeId === service.id && (
  <div onClick={onClick} className={`flex ${style.mega_sub_menu}`}>
    {service.sections.map((section, index) => (
      <section key={index}>
        <span className={style.nav_title}>{section.title}</span>
        <ul className="list-none">
          {section.items.map((item, linkIndex) => ( 
            <li key={linkIndex}>
              <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href={item.link}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    ))}
  </div>
)}

        </li>
      ))}
    </ul>
  );
}
