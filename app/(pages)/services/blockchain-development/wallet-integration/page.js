import React from "react";
import Head from "next/head";
import ServiceBanner from "@/app/(components)/service-banner/ServiceBanner";
import ServiceBannerList from "@/app/(components)/service-banner/ServiceBannerList.json";
import CaseStudies from "@/app/(components)/case-studies/CaseStudies";
import Faqs from "@/app/(components)/faqs/Faqs";
import BlogsSlider from "@/app/(components)/blogs-slider/BlogsSlider";
import Cta from "@/app/(components)/cta/Cta";
import CtaList from "@/app/(components)/cta/CtaList.json";
import WebsiteContactForm from "@/app/(components)/website-contact-form/WebsiteContactForm";
import BlockchainDevelopmentServices from "@/app/(components)/blockchain-development-services/BlockchainDevelopmentServices";
import BlockchainDevelopmentServicesList from "@/app/(components)/blockchain-development-services/BlockchainDevelopmentServicesList.json";
import BlockchainDevelopmentProcess from "@/app/(components)/blockchain-development-process/BlockchainDevelopmentProcess";
import BlockchainDevelopmentProcessList from "@/app/(components)/blockchain-development-process/BlockchainDevelopmentProcessList.json";
import BlockchainDevelopmentServicesFor from "@/app/(components)/blockchain-development-services-for/BlockchainDevelopmentServicesFor";
import BlockchainDevelopmentServicesForList from "@/app/(components)/blockchain-development-services-for/BlockchainDevelopmentServicesFor.json";
import WhyChooseBlockchain from "@/app/(components)/why-choose-blockchain/WhyChooseBlockchain";
import WhyChooseBlockchainList from "@/app/(components)/why-choose-blockchain/WhyChooseBlockchainList.json";

export default function WalletIntegration() {
  const bannerData = ServiceBannerList.wallet_integration;
  const blockchainDevelopmentServicesData = BlockchainDevelopmentServicesList.wallet_integration;
  const ctaData = CtaList.wallet_integration;
  const blockchainDevelopmentProcessData = BlockchainDevelopmentProcessList.wallet_integration;
  const blockchainDevelopmentServicesForData = BlockchainDevelopmentServicesForList.wallet_integration;
  const whyChooseBlockchainData = WhyChooseBlockchainList.wallet_integration;

  return (
    <React.Fragment>
      <Head>
        <title>
          Crypto Wallet Development Services | Secure, Scalable Wallet Solutions | Devtrios
        </title>
        <meta
          name="description"
          content="We design and build secure crypto wallets that prioritise asset protection, usability, and long-term scalability. Mobile, web, Web3, and enterprise wallet solutions."
        />
        <link rel="canonical" href="https://devtrios.com/services/blockchain-development/wallet-integration/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Crypto Wallet Development Services | Secure Wallet Solutions | Devtrios" />
        <meta
          property="og:description"
          content="We design and build secure crypto wallets that prioritise asset protection, usability, and long-term scalability."
        />
        <meta property="og:image" content="/assets/images/header/favicon.webp" />
        <meta name="twitter:title" content="Crypto Wallet Development Services | Secure Wallet Solutions | Devtrios" />
        <meta
          name="twitter:description"
          content="We design and build secure crypto wallets that prioritise asset protection, usability, and long-term scalability."
        />
        <meta name="twitter:image" content="/assets/images/header/favicon.webp" />
      </Head>
      <ServiceBanner data={bannerData} />
      <BlockchainDevelopmentServices data={blockchainDevelopmentServicesData} />
      <BlockchainDevelopmentProcess data={blockchainDevelopmentProcessData} />
      <CaseStudies type="wallet_integration" />
      <BlockchainDevelopmentServicesFor data={blockchainDevelopmentServicesForData} />
      <WhyChooseBlockchain data={whyChooseBlockchainData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="wallet_integration" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
