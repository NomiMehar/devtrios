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

export default function SmartContractAudits() {
  const bannerData = ServiceBannerList.smart_contract_audits;
  const blockchainDevelopmentServicesData = BlockchainDevelopmentServicesList.smart_contract_audits;
  const ctaData = CtaList.smart_contract_audits;
  const blockchainDevelopmentProcessData = BlockchainDevelopmentProcessList.smart_contract_audits;
  const blockchainDevelopmentServicesForData = BlockchainDevelopmentServicesForList.smart_contract_audits;
  const whyChooseBlockchainData = WhyChooseBlockchainList.smart_contract_audits;

  return (
    <React.Fragment>
      <Head>
        <title>
          Smart Contract Audit Services | Security, Trust &amp; Deployment Readiness | Devtrios
        </title>
        <meta
          name="description"
          content="Our smart contract audit services identify vulnerabilities, logic flaws, and optimisation issues before deployment. Deep manual audits for DeFi, NFT, Web3, DAOs, and enterprise systems."
        />
        <link rel="canonical" href="https://devtrios.com/services/blockchain-development/smart-contract-audits/" />
        <link
          rel="shortcut icon"
          href="/assets/images/header/favicon.webp"
          type="image/x-icon"
        />
        <meta property="og:title" content="Smart Contract Audit Services | Security &amp; Deployment Readiness | Devtrios" />
        <meta
          property="og:description"
          content="Our smart contract audit services identify vulnerabilities, logic flaws, and optimisation issues before deployment."
        />
        <meta property="og:image" content="/assets/images/header/favicon.webp" />
        <meta name="twitter:title" content="Smart Contract Audit Services | Security &amp; Deployment Readiness | Devtrios" />
        <meta
          name="twitter:description"
          content="Our smart contract audit services identify vulnerabilities, logic flaws, and optimisation issues before deployment."
        />
        <meta name="twitter:image" content="/assets/images/header/favicon.webp" />
      </Head>
      <ServiceBanner data={bannerData} />
      <BlockchainDevelopmentServices data={blockchainDevelopmentServicesData} />
      <BlockchainDevelopmentProcess data={blockchainDevelopmentProcessData} />
      <CaseStudies type="smart_contract_audits" />
      <BlockchainDevelopmentServicesFor data={blockchainDevelopmentServicesForData} />
      <WhyChooseBlockchain data={whyChooseBlockchainData} />
      <Cta data={ctaData} />
      <BlogsSlider />
      <Faqs type="smart_contract_audits" />
      <WebsiteContactForm />
    </React.Fragment>
  );
}
