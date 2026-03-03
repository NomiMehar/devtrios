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

export default function Web3AppDevelopment() {
  const bannerData = ServiceBannerList.web3_app_development;
  const blockchainDevelopmentServicesData = BlockchainDevelopmentServicesList.web3_app_development;
  const ctaData = CtaList.web3_app_development;
  const blockchainDevelopmentProcessData = BlockchainDevelopmentProcessList.web3_app_development;
  const blockchainDevelopmentServicesForData = BlockchainDevelopmentServicesForList.web3_app_development;
  const whyChooseBlockchainData = WhyChooseBlockchainList.web3_app_development;

  return (
    <React.Fragment>
      <Head>
        <title>
          Web3 App Development Services | Secure, Scalable dApps &amp; Blockchain Applications | Devtrios
        </title>
        <meta
          name="description"
          content="We design and develop production-ready Web3 applications that combine decentralised architecture with real business logic. From dApps and Web3 platforms to wallet integrations and smart contract powered systems."
        />
        <link rel="canonical" href="https://devtrios.com/services/blockchain-development/web3-app-development/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Web3 App Development Services | Secure, Scalable dApps | Devtrios" />
        <meta
          property="og:description"
          content="We design and develop production-ready Web3 applications that combine decentralised architecture with real business logic."
        />
        <meta property="og:image" content="/assets/images/header/favicon.webp" />
        <meta name="twitter:title" content="Web3 App Development Services | Secure, Scalable dApps | Devtrios" />
        <meta
          name="twitter:description"
          content="We design and develop production-ready Web3 applications that combine decentralised architecture with real business logic."
        />
        <meta name="twitter:image" content="/assets/images/header/favicon.webp" />
      </Head>
      <ServiceBanner data={bannerData} />
      <BlockchainDevelopmentServices data={blockchainDevelopmentServicesData} />
      <BlockchainDevelopmentProcess data={blockchainDevelopmentProcessData} />
      <CaseStudies type="web3_app_development" />
      <BlockchainDevelopmentServicesFor data={blockchainDevelopmentServicesForData} />
      <WhyChooseBlockchain data={whyChooseBlockchainData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="web3_app_development" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
